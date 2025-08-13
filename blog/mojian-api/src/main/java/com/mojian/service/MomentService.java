package com.mojian.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.mojian.common.PageQuery;
import com.mojian.entity.SysMoment;
import com.mojian.vo.moment.MomentPageVo;

/**
 * @author: quequnlong
 * @date: 2025/2/5
 * @description:
 */
public interface MomentService {
    IPage<MomentPageVo> getMomentList();

    IPage<SysMoment> getMyMoments(String keywords);

    int deleteMyMoments(Long id);

    int addMoment(SysMoment sysMoment);

    int updateMoment(SysMoment sysMoment);

    SysMoment getMoment(Long id);
}
