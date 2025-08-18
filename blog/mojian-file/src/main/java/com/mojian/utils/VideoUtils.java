
package com.mojian.utils;


import org.bytedeco.ffmpeg.global.avcodec;
import org.bytedeco.javacv.FFmpegFrameGrabber;
import org.bytedeco.javacv.FFmpegFrameRecorder;
import org.bytedeco.javacv.Frame;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class VideoUtils {

    /**
     * 检查视频编码格式
     * @param file 视频文件
     * @return 编码格式名称
     * @throws IOException IO异常
     */
    public static String checkVideoCodec(File file) throws IOException {
        try (FFmpegFrameGrabber grabber = new FFmpegFrameGrabber(file)) {
            grabber.start();
            String codecName = grabber.getVideoCodecName();
            grabber.stop();
            return codecName;
        }
    }

    /**
     * 转换视频编码为H.264
     * @param inputFile 输入文件
     * @param outputFile 输出文件
     * @throws IOException IO异常
     */
    public static void convertToH264(File inputFile, File outputFile) throws IOException {
        FFmpegFrameGrabber grabber = null;
        FFmpegFrameRecorder recorder = null;

        try {
            grabber = new FFmpegFrameGrabber(inputFile);
            grabber.start();

            recorder = new FFmpegFrameRecorder(outputFile, grabber.getImageWidth(), grabber.getImageHeight(), grabber.getAudioChannels());

            // 设置视频参数
            recorder.setVideoCodec(avcodec.AV_CODEC_ID_H264); // 设置视频编码为H.264
            recorder.setVideoBitrate(grabber.getVideoBitrate()); // 保持原始比特率
            recorder.setVideoQuality(0); // 最高质量
            recorder.setFrameRate(grabber.getFrameRate()); // 保持原始帧率
            recorder.setSampleRate(grabber.getSampleRate()); // 保持原始采样率
            recorder.setAudioChannels(grabber.getAudioChannels()); // 保持原始声道数
            recorder.setAudioBitrate(grabber.getAudioBitrate()); // 保持原始音频比特率
            recorder.setAudioCodec(avcodec.AV_CODEC_ID_AAC); // 设置音频编码为AAC
            recorder.setFormat("mp4"); // 设置输出格式

            recorder.start();

            Frame frame;
            while ((frame = grabber.grabFrame()) != null) {
                recorder.record(frame);
            }
        } finally {
            if (recorder != null) {
                recorder.stop();
                recorder.release();
            }
            if (grabber != null) {
                grabber.stop();
                grabber.release();
            }
        }
    }


}
