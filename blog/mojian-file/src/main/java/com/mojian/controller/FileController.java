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
import com.mojian.utils.VideoUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.bytedeco.javacv.FFmpegLogCallback;
import org.dromara.x.file.storage.core.FileInfo;
import org.dromara.x.file.storage.core.FileStorageProperties;
import org.dromara.x.file.storage.core.FileStorageService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;

import java.util.ArrayList;
import java.util.List;

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

        // 视频文件处理逻辑
        if (file.getContentType() != null && file.getContentType().startsWith("video")) {
            try {
                // 先将上传文件保存到临时文件，以便可以多次访问
                File originalTempFile = File.createTempFile("original", ".tmp");
                file.transferTo(originalTempFile);

                String codec = VideoUtils.checkVideoCodec(originalTempFile);
                if (!"h264".equalsIgnoreCase(codec) && !"avc1".equalsIgnoreCase(codec) && !"avc".equalsIgnoreCase(codec)) {
                    log.info("视频文件编码不是h264，开始转码...");
                    // 保存原始文件信息
                    String originalName = file.getOriginalFilename();
                    String contentType = file.getContentType();
                    String name = file.getName();

                    // 创建转码输出文件
                    File tempOutput = File.createTempFile("output", ".mp4");

                    // 执行转码
                    VideoUtils.convertToH264(originalTempFile, tempOutput);

                    // 检查转码是否成功
                    if (!tempOutput.exists() || tempOutput.length() == 0) {
                        tempOutput.delete();
                        originalTempFile.delete();
                        throw new ServiceException("视频转码失败，输出文件为空");
                    }

                    // 使用转码后的文件创建新的 MultipartFile
                    byte[] fileContent = Files.readAllBytes(tempOutput.toPath());
                    uploadFile = new CustomMultipartFile(fileContent, name,
                            originalName, contentType);

                    // 清理临时文件
                    tempOutput.delete();
                } else {
                    // 如果已经是 h264 编码，创建一个新的 MultipartFile 来包装原始文件
                    byte[] fileContent = Files.readAllBytes(originalTempFile.toPath());
                    uploadFile = new CustomMultipartFile(fileContent, file.getName(),
                            file.getOriginalFilename(), file.getContentType());
                }

                // 删除原始临时文件
                originalTempFile.delete();
            } catch (Exception e) {
                e.printStackTrace(); // 打印详细错误信息
                throw new ServiceException("视频处理失败: " + e.getMessage());
            }
        }

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
