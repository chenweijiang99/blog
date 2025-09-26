package com.mojian.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.bean.BeanUtil;
import cn.hutool.http.HttpUtil;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mojian.common.Constants;
import com.mojian.dto.JuHeCheckLoginResponse;
import com.mojian.dto.JuHeLoginResponse;
import com.mojian.dto.user.LoginUserInfo;
import com.mojian.entity.SysRole;
import com.mojian.entity.SysUser;
import com.mojian.mapper.SysRoleMapper;
import com.mojian.mapper.SysUserMapper;
import com.mojian.service.JuHeService;
import com.mojian.utils.IpUtil;
import com.mojian.utils.RedisUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Random;
import java.util.UUID;

@RequiredArgsConstructor
@Service
@Slf4j
public class JuHeServiceImpl implements JuHeService {

    private final SysUserMapper userMapper;
    private final SysRoleMapper sysRoleMapper;
    private final RedisUtil redisUtil;
    @Override
    public JuHeLoginResponse getJuHeAuth(Integer type) {
        String result = HttpUtil.get("http://101.35.2.25/api/user/jhdl.php?id=10008450&key=86b9b28af476d230a39d3acb574c01eb&type=" + type);
        ObjectMapper  objectMapper = new ObjectMapper();
        new JuHeLoginResponse();
        JuHeLoginResponse juHeLoginResponse;
        try {
            juHeLoginResponse = objectMapper.readValue(result, JuHeLoginResponse.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }


        return juHeLoginResponse;
    }

    @Override
    public LoginUserInfo checkJuHeLogin(String cxid) throws IOException {
        String result = HttpUtil.get("http://101.35.2.25/api/user/jhdlq.php?id=10008450&key=86b9b28af476d230a39d3acb574c01eb&cxid=" + cxid);
        ObjectMapper  objectMapper = new ObjectMapper();
        JuHeCheckLoginResponse juHeCheckLoginResponse;
        try {
            juHeCheckLoginResponse = objectMapper.readValue(result, JuHeCheckLoginResponse.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        if(juHeCheckLoginResponse.getCode() != 200){
            throw new RuntimeException("登录失败");
        }
        SysUser user = userMapper.selectOne(new LambdaQueryWrapper<SysUser>().eq(SysUser::getUsername, juHeCheckLoginResponse.getSocial_uid()));
        if (ObjectUtils.isEmpty(user)) {
            // 保存账号信息
            user = SysUser.builder()
                    .username(juHeCheckLoginResponse.getSocial_uid())
                    .password(UUID.randomUUID().toString())
                    .loginType(juHeCheckLoginResponse.getType())
                    .lastLoginTime(LocalDateTime.now())
                    .ipLocation(juHeCheckLoginResponse.getLocation())
                    .ip(juHeCheckLoginResponse.getIp())
                    .status(Constants.YES)
                    .nickname(juHeCheckLoginResponse.getType() + "-" +getRandomString(6))
                    .avatar(juHeCheckLoginResponse.getFaceimg())
                    .build();
            userMapper.insert(user);
            //添加角色s
            insertRole(user);
        }
        // 登录
        StpUtil.login(user.getId());
        LoginUserInfo loginUserInfo = BeanUtil.copyProperties(user, LoginUserInfo.class);
        loginUserInfo.setToken(StpUtil.getTokenValue());
        return loginUserInfo;
    }

    private static String getLoginType(Integer type) {
     switch ( type) {
         case 1:
             return "QQ";
         case 2:
             return "微信";
         case 3:
             return "支付宝";
         case 4:
             return "微博";
         case 5:
             return "百度";
         case 6:
             return "华为";
         case 7:
             return "小米";
         case 8:
             return "微软";
         case 9:
             return "钉钉";
         case 10:
             return "Gitee";
         case 11:
             return "GitHub";
         case 12:
             return "抖音";
         default:
             return "未知";
     }
    }
    public static String getRandomString(int length) {
        String str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789";
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < length; i++) {
            int number = random.nextInt(str.length());
            sb.append(str.charAt(number));
        }
        return sb.toString();
    }
    /**
     * 添加用户角色信息
     * @param user
     */
    private void insertRole(SysUser user) {
        SysRole sysRole = sysRoleMapper.selectOne(new LambdaQueryWrapper<SysRole>().eq(SysRole::getCode, Constants.USER));
        sysRoleMapper.addRoleUser(user.getId(), Collections.singletonList(sysRole.getId()));
    }
}
