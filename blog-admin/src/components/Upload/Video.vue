<template>
  <div class="upload-container">
    <!-- 平台选择框 -->
    <div class="platform-selector">
      <el-select 
        v-model="selectedPlatform" 
        placeholder="请选择上传平台"
        @change="handlePlatformChange"
        size="small"
      >
        <el-option
          v-for="platform in uploadPlatforms"
          :key="platform.value"
          :label="platform.label"
          :value="platform.value"
        />
      </el-select>
    </div>

    <el-upload
      v-model:file-list="fileList"
      :action="uploadUrl"
      list-type="picture-card"
      :headers="headers"
      :multiple="multiple"
      :limit="limit"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :on-exceed="handleExceed"
      :before-upload="beforeUpload"
      :data="uploadData"
    >
      <el-icon><Plus /></el-icon>
      <template #tip>
        <div class="upload-tip">
          只能上传Mp4文件，且不超过{{ fileSize }}MB
        </div>
      </template>
      <!-- 自定义文件列表项 -->
      <template #file="{ file }">
        <div class="upload-file-item">
          <video v-if="isVideoFile(file)" class="upload-video" :src="file.url" />
          <div v-else class="upload-video-placeholder">
            <el-icon class="video-icon"><VideoPlay /></el-icon>
          </div>
          <span class="upload-file-name" :title="file.name">{{ file.name }}</span>
          
          <!-- 操作按钮 -->
          <div class="upload-file-actions">
            <span class="upload-file-preview" @click="handlePreview(file)">
              <el-icon><ZoomIn /></el-icon>
            </span>
            <span class="upload-file-delete" @click="handleItemRemove(file)">
              <el-icon><Delete /></el-icon>
            </span>
          </div>
        </div>
      </template>
    </el-upload>

    <!-- 视频预览对话框 -->
    <el-dialog v-model="dialogVisible" top="5vh" title="预览视频">
      <video :src="dialogVideoUrl" controls style="width: 100%; height: 500px; object-fit: contain;"></video>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import { Plus, VideoPlay, ZoomIn, Delete } from '@element-plus/icons-vue'
import type { UploadProps, UploadUserFile } from 'element-plus'
import { getToken } from '@/utils/auth'
import { uploadApi,deleteFileApi } from '@/api/file'
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Array],
    default: ''
  },
  limit: {
    type: Number,
    default: 1
  },
  fileSize: {
    type: Number,
    default: 50
  },
  multiple: {
    type: Boolean,
    default: false
  },
  source: {
    type: String,
    default: 'default'
  }
})

const emit = defineEmits(['update:modelValue'])

// 解析环境变量中的平台配置
const parsePlatforms = () => {
  const platformsStr = import.meta.env.VITE_APP_UPLOAD_PLATFORMS
  if (platformsStr) {
    try {
      return JSON.parse(platformsStr)
    } catch (e) {
      console.error('解析上传平台配置失败:', e)
      return [
        { label: '本地云', value: 'local' },
        { label: '阿里云', value: 'ali' }
      ]
    }
  }
  // 默认平台配置
  return [
    { label: '本地云', value: 'local' },
    { label: '阿里云', value: 'ali' }
  ]
}

// 平台选项
const uploadPlatforms = ref(parsePlatforms())

// 平台选择，默认为第一个平台
const selectedPlatform = ref(uploadPlatforms.value[0].value)

// 上传地址（不包含参数）
const uploadUrl = computed(() => {
  return `${import.meta.env.VITE_APP_BASE_API}/file/upload`
})

// 上传额外参数
const uploadData = computed(() => {
  return {
    source: props.source,
    platform: selectedPlatform.value
  }
})

// 请求头
const headers = {
  Authorization: getToken()
}

const fileList = ref<UploadUserFile[]>([])
const dialogVideoUrl = ref('')
const dialogVisible = ref(false)

// 处理平台切换
const handlePlatformChange = () => {
  // 平台切换后，下次上传会使用新平台
}

// 判断是否为视频文件
const isVideoFile = (file: UploadUserFile) => {
  if (!file.url) return false
  const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm']
  return videoExtensions.some(ext => file.url!.toLowerCase().includes(ext))
}

// 初始化文件列表
const initFileList = () => {
  if (!props.modelValue) return
  
  if (typeof props.modelValue === 'string') {
    fileList.value = [{
      name: props.modelValue.substring(props.modelValue.lastIndexOf('/') + 1),
      url: props.modelValue
    }]
  } else if (Array.isArray(props.modelValue)) {
    fileList.value = (props.modelValue as string[]).map(url => ({
      name: url.substring(url.lastIndexOf('/') + 1),
      url: url
    }))
  }
}

// 处理视频预览
const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogVideoUrl.value = uploadFile.url!
  dialogVisible.value = true
}

// 处理单项删除
const handleItemRemove = (file: UploadUserFile) => {
  ElMessageBox.confirm('确定要删除该文件吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    handleRemove(file, fileList.value)
  }).catch(() => {
    // 取消删除
  })
}

// 处理视频删除
const handleRemove: UploadProps['onRemove'] = async (uploadFile: any, uploadFiles: any) => {
  if (props.multiple) {
    await deleteFileApi(uploadFile.url)
    const urls = (props.modelValue as string[]).filter(url => url !== uploadFile.url)
    emit('update:modelValue', urls)
  } else {
    await deleteFileApi(uploadFile.url)
    emit('update:modelValue', '')
  }
}

// 处理上传成功
const handleSuccess: UploadProps['onSuccess'] = async (response) => {
  console.log(response)
  if (response.code === 200) {
    const url = response.data
    if (props.multiple) {
      const urls = props.modelValue ? [...(props.modelValue as string[])] : []
      urls.push(url)
      emit('update:modelValue', urls)
      fileList.value = urls.map(u => ({
        name: u.substring(u.lastIndexOf('/') + 1),
        url: u
      }))
    } else {
      emit('update:modelValue', url)
      fileList.value = [{
        name: url.substring(url.lastIndexOf('/') + 1),
        url: url
      }]
    }
    ElMessage.success('上传成功')
  } else {
    ElMessage.error('上传失败')
  }
}

// 处理超出限制
const handleExceed: UploadProps['onExceed'] = () => {
  ElMessage.warning(`最多只能上传 ${props.limit} 个文件`)
}

// 上传前的校验
const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  const isVideo = /^video\/(mp4)$/.test(file.type)

  const isLt = file.size / 1024 / 1024 < props.fileSize

  if (!isVideo) {
    ElMessage.error('只能上传Mp4格式的视频!')
    return false
  }
  if (!isLt) {
    ElMessage.error(`视频大小不能超过 ${props.fileSize}MB!`)
    return false
  }
  return true
}

// 监听modelValue变化
watch(() => props.modelValue, () => {
  initFileList()
}, { immediate: true })
</script>

<style scoped>
.upload-container {
  .upload-tip {
    font-size: 12px;
    color: #909399;
    margin-top: 8px;
  }
  
  .platform-selector {
    margin-bottom: 16px;
  }
}

:deep(.el-upload--picture-card) {
  --el-upload-picture-card-size: 100px;
}

:deep(.el-upload-list--picture-card) {
  --el-upload-list-picture-card-size: 100px;
}

.upload-file-item {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.upload-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload-video-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
}

.video-icon {
  font-size: 24px;
  color: #909399;
}

.upload-file-name {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
  padding: 2px 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

.upload-file-actions {
  position: absolute;
  top: 4px;
  right: 4px;
  display: none;
}

.upload-file-item:hover .upload-file-actions {
  display: flex;
}

.upload-file-preview,
.upload-file-delete {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-left: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 12px;
}

.upload-file-preview:hover,
.upload-file-delete:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>