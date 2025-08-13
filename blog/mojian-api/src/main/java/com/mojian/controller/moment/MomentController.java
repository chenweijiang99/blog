package com.mojian.controller.moment;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.mojian.common.PageQuery;
import com.mojian.common.Result;
import com.mojian.entity.SysMoment;
import com.mojian.service.MomentService;
import com.mojian.vo.moment.MomentPageVo;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

/**
 * @author: quequnlong
 * @date: 2025/2/5
 * @description:
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/moment")
@Api(tags = "门户-说说管理")
public class MomentController {

    private final MomentService momentService;

    @GetMapping("/list")
    @Operation(description = "说说列表")
    public Result<IPage<MomentPageVo>> getMomentList() {
        return Result.success(momentService.getMomentList());
    }

    @GetMapping("myMoments")
    @Operation(description = "获取我的说说")
    public Result<IPage<SysMoment>> getMyMoments(String keywords) {
        return Result.success(momentService.getMyMoments(keywords));
    }
    @GetMapping("getMoment")
    @Operation(description = "获取说说")
    public Result<SysMoment> getMoment(Long id) {
        return Result.success(momentService.getMoment(id));
    }

    @DeleteMapping("deleteMyMoments")
    @Operation(description = "删除我的说说")
    public Result<Integer> deleteMyMoments(Long id) {
        return Result.success(momentService.deleteMyMoments(id));
    }

    @PostMapping("addMoment")
    @Operation(description = "添加说说")
    public Result<Integer> addMoment(@RequestBody SysMoment sysMoment) {
        return Result.success(momentService.addMoment(sysMoment));
    }

    @PostMapping("updateMoment")
    @Operation(description = "修改说说")
    public Result<Integer> updateMoment(@RequestBody SysMoment sysMoment) {
        return Result.success(momentService.updateMoment(sysMoment));
    }

}
