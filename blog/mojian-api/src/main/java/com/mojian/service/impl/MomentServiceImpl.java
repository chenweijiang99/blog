package com.mojian.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.mojian.common.PageQuery;
import com.mojian.entity.SysMoment;
import com.mojian.exception.GlobalException;
import com.mojian.mapper.SysMomentMapper;
import com.mojian.service.MomentService;
import com.mojian.utils.PageUtil;
import com.mojian.vo.moment.MomentPageVo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author: quequnlong
 * @date: 2025/2/5
 * @description:
 */
@Service
@RequiredArgsConstructor
public class MomentServiceImpl extends ServiceImpl<SysMomentMapper, SysMoment> implements MomentService {

    private final SysMomentMapper baseMapper;

    @Override
    public IPage<MomentPageVo> getMomentList() {
        return baseMapper.selectPage(PageUtil.getPage());
    }

    @Override
    public IPage<SysMoment> getMyMoments(String keywords) {
        return baseMapper.selectMyMoments(PageUtil.getPage(), StpUtil.getLoginIdAsLong(), keywords);
    }

    @Override
    public int deleteMyMoments(Long id) {
        SysMoment sysMoment = baseMapper.selectById(id);
        if (sysMoment == null || sysMoment.getUserId() != StpUtil.getLoginIdAsLong()) {
            return 0;
        }
        return baseMapper.deleteById(sysMoment);
    }

    @Override
    public int addMoment(SysMoment sysMoment) {
        sysMoment.setUserId(StpUtil.getLoginIdAsLong());
        return baseMapper.insert(sysMoment);
    }

    @Override
    public int updateMoment(SysMoment sysMoment) {
        UpdateWrapper<SysMoment> updateWrapper = new UpdateWrapper<>();
        updateWrapper.eq("id", sysMoment.getId());
        updateWrapper.set("content", sysMoment.getContent());
        updateWrapper.set("images", sysMoment.getImages() != null && !sysMoment.getImages().isEmpty() ? sysMoment.getImages() : null);
        return baseMapper.update(sysMoment, updateWrapper);
    }

    @Override
    public SysMoment getMoment(Long id) {
        return baseMapper.selectById(id);
    }
}
