package com.mojian.controller;

import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.dev33.satoken.annotation.SaCheckPermission;
import cn.hutool.core.util.RandomUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.mojian.common.Constants;
import com.mojian.common.Result;
import com.mojian.entity.FileDetail;
import com.mojian.entity.SysFileOss;
import com.mojian.enums.FileOssEnum;
import com.mojian.exception.ServiceException;
import com.mojian.mapper.SysFileOssMapper;
import com.mojian.service.FileDetailService;
import com.mojian.utils.CustomMultipartFile;
import com.mojian.utils.DateUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.dromara.x.file.storage.core.FileInfo;
import org.dromara.x.file.storage.core.FileStorageProperties;
import org.dromara.x.file.storage.core.FileStorageService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin(origins = "*")
@Slf4j
@RestController
@RequestMapping("/file")
@Api(tags = "文件管理")
@RequiredArgsConstructor
public class FileController {
    private final FileDetailService fileDetailService;

    private final FileStorageService fileStorageService;

    private final SysFileOssMapper sysFileOssMapper;

    @SaCheckLogin
    @GetMapping("/list")
    @ApiOperation(value = "获取文件记录表列表")
    public Result<IPage<FileDetail>> list(FileDetail fileDetail) {
        return Result.success(fileDetailService.selectPage(fileDetail));
    }

    @SaCheckLogin
    @GetMapping("/getOssConfig")
    @ApiOperation(value = "获取存储平台配置")
    public Result<List<SysFileOss>> getOssConfig() {
        return Result.success(fileDetailService.getOssConfig());
    }

    @SaCheckLogin
    @PostMapping("/addOss")
    @SaCheckPermission("sys:oss:submit")
    @ApiOperation(value = "添加存储平台配置")
    public Result<Void> addOss(@RequestBody SysFileOss sysFileOss) {
        fileDetailService.addOss(sysFileOss);
//        if (sysFileOss.getIsEnable() == Constants.YES) {
//            fileStorageService.getProperties().setDefaultPlatform(sysFileOss.getPlatform());
//        }
        return Result.success();
    }

    @SaCheckLogin
    @PutMapping("/updateOss")
    @SaCheckPermission("sys:oss:submit")
    @ApiOperation(value = "修改存储平台配置")
    public Result<Void> updateOss(@RequestBody SysFileOss sysFileOss) {
        fileDetailService.updateOss(sysFileOss);
//        if (sysFileOss.getIsEnable() == Constants.YES) {
//            fileStorageService.getProperties().setDefaultPlatform(sysFileOss.getPlatform());
//        }
        return Result.success();
    }

    @SaCheckLogin
    @PostMapping("/upload")
    @ApiOperation(value = "上传文件")
    public Result<String> upload(MultipartFile file, String source, @RequestParam(required = false) String platform) {
        MultipartFile uploadFile = file;
        String path = DateUtil.parseDateToStr(DateUtil.YYYYMMDD, DateUtil.getNowDate()) + "/";
        if (StringUtils.isNotBlank(source)) {
            path = path + source + "/";
        }
        if(StringUtils.isBlank(platform)){
            LambdaQueryWrapper<SysFileOss> sysFileOssLambdaQueryWrapper = new LambdaQueryWrapper<>();
            sysFileOssLambdaQueryWrapper.eq(SysFileOss::getPlatform, FileOssEnum.ALI.getValue());
            sysFileOssLambdaQueryWrapper.eq(SysFileOss::getIsEnable, Constants.YES);
            SysFileOss sysFileOss = sysFileOssMapper.selectOne(sysFileOssLambdaQueryWrapper);
            if (sysFileOss == null) {
                platform = FileOssEnum.LOCAL.getValue();
            } else {
                platform = sysFileOss.getPlatform();
            }
        }
        FileInfo fileInfo = fileStorageService.of(uploadFile)
                .setPath(path)
                .setSaveFilename(RandomUtil.randomNumbers(2) + "_" + uploadFile.getOriginalFilename())
                .putAttr("source",source).setPlatform(platform).upload();
        if (fileInfo == null) {
            throw new ServiceException("上传文件失败");
        }
        return Result.success(fileInfo.getUrl());
    }

    @SaCheckLogin
    @PostMapping("/uploadBatch")
    @ApiOperation(value = "批量上传文件")
    public Result<List<String>> uploadBatch(MultipartFile[] files, String source,@RequestParam(required = false) String platform) {
        String path = DateUtil.parseDateToStr(DateUtil.YYYYMMDD, DateUtil.getNowDate()) + "/";
        if (StringUtils.isNotBlank(source)) {
            path = path + source + "/";
        }
        if(StringUtils.isBlank(platform)){
            //判断阿里云存储配置，如果未配置则使用本地存储
            LambdaQueryWrapper<SysFileOss> sysFileOssLambdaQueryWrapper = new LambdaQueryWrapper<>();
            //查询ali存储配置是否存在
            sysFileOssLambdaQueryWrapper.eq(SysFileOss::getPlatform, FileOssEnum.ALI.getValue());
            sysFileOssLambdaQueryWrapper.eq(SysFileOss::getIsEnable, Constants.YES);
            SysFileOss sysFileOss = sysFileOssMapper.selectOne(sysFileOssLambdaQueryWrapper);
            if (sysFileOss == null) {
                platform = FileOssEnum.LOCAL.getValue();
            } else {
                platform = sysFileOss.getPlatform();
            }
        }
        List<String> urls = new ArrayList<>();
        for (MultipartFile file : files) {
            FileInfo fileInfo = fileStorageService.of(file)
                    .setPath(path)
                    .setSaveFilename(RandomUtil.randomNumbers(2) + "_" + file.getOriginalFilename()) //随机俩个数字，避免相同文件名时文件名冲突
                    .putAttr("source", source)
                    .setPlatform( platform)
                    .upload();
            urls.add(fileInfo.getUrl());
        }
        return Result.success(urls);
    }




    @GetMapping("/delete")
    @ApiOperation(value = "删除文件")
    @SaCheckPermission("sys:file:delete")
    public Result<Boolean> delete(String url) {
        boolean flag = fileStorageService.delete(url);
        if (flag) {
            fileDetailService.delete(url);
        }
        return Result.success();
    }

    @PostMapping("/deleteBatch")
    @ApiOperation(value = "批量删除文件")
    @SaCheckPermission("sys:file:delete")
    public Result<Boolean> deleteBatch(@RequestBody String[] urls) {
        List<String> deleteUrls = new ArrayList<>();
        for(String url : urls){
            boolean flag = fileStorageService.delete(url);
            if (flag) {
                deleteUrls.add(url);
            }
        }
        if (deleteUrls.size() == urls.length) {
            fileDetailService.deleteBatch(urls);
        }
        return Result.success(true);
    }
}
