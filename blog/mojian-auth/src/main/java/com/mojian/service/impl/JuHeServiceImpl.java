package com.mojian.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.http.HttpUtil;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mojian.common.Constants;
import com.mojian.common.RedisConstants;
import com.mojian.config.properties.FrontProperties;
import com.mojian.config.properties.JuHeLoginConfigProperties;
import com.mojian.dto.JuHeCheckLoginResponse;
import com.mojian.dto.JuHeLoginResponse;
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
import java.util.concurrent.TimeUnit;

@RequiredArgsConstructor
@Service
@Slf4j
public class JuHeServiceImpl implements JuHeService {

    private final SysUserMapper userMapper;
    private final SysRoleMapper sysRoleMapper;
    private final RedisUtil redisUtil;
    private final JuHeLoginConfigProperties juHeLoginConfigProperties;
    private final FrontProperties frontProperties;
    @Override
    public JuHeLoginResponse getJuHeAuth(Integer type) {
        String userUid = IpUtil.getIp() + "_" + type + "_" + UUID.randomUUID();
        String apiUrl = juHeLoginConfigProperties.getLoginUrl()
                + "?id=" + juHeLoginConfigProperties.getId()
                + "&key=" + juHeLoginConfigProperties.getKey()
                + "&return=" + juHeLoginConfigProperties.getReturnUrl()+ userUid
                + "&type=" + type;
        String result = HttpUtil.get(apiUrl);
        ObjectMapper  objectMapper = new ObjectMapper();
        new JuHeLoginResponse();
        JuHeLoginResponse juHeLoginResponse;
        try {
            juHeLoginResponse = objectMapper.readValue(result, JuHeLoginResponse.class);
            redisUtil.set(userUid, juHeLoginResponse.getCxid(), RedisConstants.FIVE_MINUTES_EXPIRE, TimeUnit.MINUTES);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return juHeLoginResponse;
    }

    @Override
    public void checkJuHeLogin(String userUid, HttpServletResponse httpServletResponse) throws IOException {
        String cxid = redisUtil.get(userUid).toString();
        if (ObjectUtils.isEmpty(cxid)) {
            httpServletResponse.sendRedirect(frontProperties.getUrl() +"login?message='登录过期'" );
        }
        String checkUrl = juHeLoginConfigProperties.getCheckLoginUrl()
                + "?id=" + juHeLoginConfigProperties.getId()
                + "&key=" + juHeLoginConfigProperties.getKey()
                + "&cxid=" + cxid;
        String result = HttpUtil.get(checkUrl);
        ObjectMapper  objectMapper = new ObjectMapper();
        JuHeCheckLoginResponse juHeCheckLoginResponse;
        try {
            juHeCheckLoginResponse = objectMapper.readValue(result, JuHeCheckLoginResponse.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        if (juHeCheckLoginResponse.getCode() != 200) {
            httpServletResponse.sendRedirect(frontProperties.getUrl() +"login?message='登录失败'" );
        }
        redisUtil.delete(userUid);
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
                    .nickname(juHeCheckLoginResponse.getNickname())
                    .avatar(juHeCheckLoginResponse.getFaceimg())
                    .build();
            userMapper.insert(user);
            //添加角色s
            insertRole(user);
        }
        // 登录
        StpUtil.login(user.getId());
        httpServletResponse.sendRedirect(frontProperties.getUrl() + "?token=" + StpUtil.getTokenValue());
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
