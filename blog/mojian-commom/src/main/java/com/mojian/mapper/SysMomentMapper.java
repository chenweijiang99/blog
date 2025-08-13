package com.mojian.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.mojian.entity.SysMoment;
import com.mojian.vo.moment.MomentPageVo;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author: quequnlong
 * @date: 2025/2/5
 * @description:
 */
@Mapper
public interface SysMomentMapper extends BaseMapper<SysMoment> {


    IPage<MomentPageVo> selectPage(IPage<SysMoment> page);

    IPage<SysMoment> selectMyMoments(Page<Object> page, long userId, String keywords);
}
