package com.mojian.controller.article;

import java.util.Date;
import java.util.List;

import cn.dev33.satoken.annotation.SaCheckPermission;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;
import com.mojian.entity.SysMoment;
import com.mojian.service.SysMomentService;
import com.mojian.common.Result;
import com.baomidou.mybatisplus.core.metadata.IPage;
import lombok.RequiredArgsConstructor;

/**
 * 说说 控制器
 */
@RestController
@RequestMapping("/sys/moment")
@RequiredArgsConstructor
@Api(tags = "说说管理")
public class SysMomentController {

    private final SysMomentService sysMomentService;

    @GetMapping("/list")
    @ApiOperation(value = "获取说说列表")
    public Result<IPage<SysMoment>> list(SysMoment sysMoment) {
        return Result.success(sysMomentService.selectPage(sysMoment));
    }

    @PostMapping("/add")
    @SaCheckPermission("sys:moment:add")
    @ApiOperation(value = "添加说说")
    public Result<Object> add(@RequestBody SysMoment sysMoment) {
        return Result.success(sysMomentService.add(sysMoment));
    }

    @PutMapping("/update")
    @SaCheckPermission("sys:moment:update")
    @ApiOperation(value = "修改说说")
    public Result<Object> edit(@RequestBody SysMoment sysMoment) {
        UpdateWrapper<SysMoment> updateWrapper = new UpdateWrapper<>();
        updateWrapper.eq("id", sysMoment.getId());
        updateWrapper.set("content", sysMoment.getContent());
        updateWrapper.set("images", sysMoment.getImages() != null && !sysMoment.getImages().isEmpty() ? sysMoment.getImages() : null);
        return Result.success(sysMomentService.update(updateWrapper));
    }

    @DeleteMapping("/delete/{ids}")
    @SaCheckPermission("sys:moment:delete")
    @ApiOperation(value = "删除说说")
    public Result<Object> remove(@PathVariable List<Long> ids) {
        return Result.success(sysMomentService.removeByIds(ids));
    }
}
