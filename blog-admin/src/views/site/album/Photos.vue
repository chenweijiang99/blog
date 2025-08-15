<template>
  <el-dialog title="相册照片" :model-value="props.openPhotos" width="80%" top="5vh" append-to-body destroy-on-close
    :close-on-click-modal="false" @update:model-value="handleDialogClose">

    <!-- 操作按钮区域 -->
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <ButtonGroup>
            <el-button v-permission="['sys:photo:add']" type="primary" icon="Plus"
              @click="handleAdd">新增照片</el-button>
            <el-button v-permission="['sys:photo:add']" type="success" icon="Upload"
              @click="handleBatchUpload">批量上传照片</el-button>
            <el-button v-permission="['sys:photo:add']" type="warning" icon="VideoPlay"
              @click="handleAddVideo">新增视频</el-button>
            <el-button v-permission="['sys:photo:delete']" type="danger" icon="Delete"
              :disabled="selectedIds.length === 0" @click="handleBatchDelete">批量删除</el-button>
            <el-button v-permission="['sys:photo:move']" type="info" icon="Notification"
              :disabled="selectedIds.length === 0" @click="handleBatchMove">批量移动</el-button>
            <el-button type="success" icon="check" @click="handleAllSelect">全/反选</el-button>
          </ButtonGroup>
        </div>
      </template>

      <!-- 数据表格 -->
      <div class="photo-list" v-loading="loading">
        <el-checkbox-group v-model="selectedIds" v-for="item in photoList" :key="item.id">
          <div class="photo-card">
            <span class="photo-select">
              <el-checkbox :value="item.id" />
            </span>
            <!-- 根据文件类型显示图片或视频 -->
            <div v-if="isVideo(item.url)" class="video-container">
              <video class="photo-image" :src="item.url" />
              <div class="play-icon">
                <el-icon><VideoPlay /></el-icon>
              </div>
            </div>
            <el-image v-else class="photo-image" :src="item.url" />
            <div class="photo-overlay">
              <div class="photo-content">
                <div class="photo-time">
                  <i class="el-icon-time" />
                  <span class="time-text">{{ item.recordTime }}</span>
                </div>
                <div class="photo-desc">{{ item.description }}</div>
              </div>
              <div class="photo-actions">
                <el-button link type="success" size="small" icon="View"
                  @click="handlePreviewPhotos(item)">查看</el-button>
                <el-button link v-permission="['sys:photo:update']" type="primary" size="small"
                  icon="Edit" @click="handleUpdate(item)">编辑</el-button>
                <el-button link v-permission="['sys:photo:delete']" type="danger" size="small"
                  icon="Delete" @click="handleDelete(item)">删除</el-button>
              </div>
            </div>
          </div>
        </el-checkbox-group>
      </div>
      <!-- 分页组件 -->
      <div class="pagination-container">
        <el-pagination v-model:current-page="queryParams.pageNum" v-model:page-size="queryParams.pageSize"
          :page-sizes="[10, 20, 30, 50]" :total="total" :background="true"
          layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
          @current-change="handleCurrentChange" />
      </div>
    </el-card>

    <!-- 添加或修改对话框 -->
    <el-dialog :title="dialog.title" v-model="dialog.visible" width="600px" append-to-body destroy-on-close
      class="custom-dialog">
      <el-form ref="photoFormRef" :model="photoForm" :rules="rules" label-width="80px" class="custom-form">
        <el-form-item label="封面" prop="url">
          <UploadImage v-model="photoForm.url" :source="'photo'" :limit="1" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="photoForm.description" type="textarea" :rows="4" show-word-limit
            placeholder="请输入描述" clearable />
        </el-form-item>
        <el-form-item label="记录时间" prop="recordTime">
          <el-date-picker v-model="photoForm.recordTime" type="date" value-format="YYYY-MM-DD"
            placeholder="请选择记录的日期..." />
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number v-model="photoForm.sort" :min="1" />
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" :loading="submitLoading" @click="submitForm">确 定</el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 添加批量上传对话框 -->
    <el-dialog title="批量上传照片" v-model="batchUploadDialog.visible" width="600px" append-to-body destroy-on-close>
      <el-form ref="batchUploadFormRef" :model="batchUploadForm" :rules="batchUploadRules" label-width="80px">
        <el-form-item label="照片" prop="files">
          <ImageBatch v-model="batchUploadForm.files" :source="'photo'" :limit="10" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="batchUploadForm.description" type="textarea" :rows="4" show-word-limit
            placeholder="请输入描述" clearable />
        </el-form-item>
        <el-form-item label="记录时间" prop="recordTime">
          <el-date-picker v-model="batchUploadForm.recordTime" type="date" value-format="YYYY-MM-DD"
            placeholder="请选择记录的日期..." />
        </el-form-item>
        <el-form-item label="排序起始" prop="sort">
          <el-input-number v-model="batchUploadForm.sort" :min="1" />
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="cancelBatchUpload">取 消</el-button>
          <el-button type="primary" :loading="batchUploadLoading" @click="submitBatchUpload">确 定</el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 新增视频上传对话框 -->
    <el-dialog :title="videoDialog.title"  v-model="videoDialog.visible" width="600px" append-to-body destroy-on-close>
      <el-form ref="videoFormRef" :model="videoForm" :rules="videoRules" label-width="80px">
        <el-form-item label="视频" prop="url">
          <UploadVideo v-model="videoForm.url" :source="'photo'" :limit="1" :file-size="50" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="videoForm.description" type="textarea" :rows="4" show-word-limit
            placeholder="请输入描述" clearable />
        </el-form-item>
        <el-form-item label="记录时间" prop="recordTime">
          <el-date-picker v-model="videoForm.recordTime" type="date" value-format="YYYY-MM-DD"
            placeholder="请选择记录的日期..." />
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number v-model="videoForm.sort" :min="1" />
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="cancelVideo">取 消</el-button>
          <el-button type="primary" :loading="videoLoading" @click="submitVideo">确 定</el-button>
        </div>
      </template>
    </el-dialog>
    
    <!-- 视频播放对话框 -->
    <el-dialog title="视频播放" v-model="videoPlayerDialog.visible" width="800px" append-to-body destroy-on-close>
      <div class="video-player-container">
        <video ref="videoPlayerRef" controls autoplay style="width: 100%; height: 500px;">
          您的浏览器不支持视频播放。
        </video>
      </div>
    </el-dialog>
    
    <!-- 批量移动对话框 -->
    <el-dialog title="移动照片" v-model="moveDialog.visible" width="400px" append-to-body destroy-on-close>
      <el-form label-width="80px">
        <el-form-item label="目标相册">
          <el-select v-model="moveDialog.targetAlbumId" placeholder="请选择目标相册" style="width: 100%">
            <el-option v-for="album in albumList" :key="album.id" :label="album.name" :value="album.id"
              :disabled="album.id === props.albumId" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="cancelMove">取 消</el-button>
          <el-button type="primary" @click="confirmMove">确 定</el-button>
        </div>
      </template>
    </el-dialog>

    <el-image-viewer v-if="openPreview" @close="closeViewer" :url-list="previewList" />
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import UploadImage from '@/components/Upload/Image.vue'
import { listPhotoApi, addPhotoApi, updatePhotoApi, deletePhotoApi, movePhotoApi, addBatchPhotoApi } from '@/api/site/photo'
import { listAlbumAllApi } from '@/api/site/album'
import ImageBatch from '@/components/Upload/ImageBatch.vue'
import UploadVideo from '@/components/Upload/Video.vue'
import { VideoPlay } from '@element-plus/icons-vue'
import { title } from 'process'

// 查询参数
const queryParams = reactive({
  pageNum: 1,
  pageSize: 10,
  albumId: 0
})

const loading = ref(false)
const total = ref(0)
const photoList = ref<any[]>([])
const previewList = ref<string[]>([])
const openPreview = ref(false)
const photoFormRef = ref<FormInstance>()
const submitLoading = ref(false)

// 所有相册
const albumList = ref<any[]>([])

const props = defineProps({
  openPhotos: {
    type: Boolean,
    default: false
  },
  albumId: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:openPhotos', 'close'])

// 选中项数组
const selectedIds = ref<number[]>([])

// 弹窗控制
const dialog = reactive({
  title: '',
  visible: false,
  type: 'add'
})

// 表单数据
const photoForm = reactive<any>({
  id: undefined,
  name: '',
  description: '',
  url: '',
  recordTime: '',
  sort: 1,
})

// 表单校验规则
const rules = reactive<FormRules>({
  url: [
    { required: true, message: '请上传封面', trigger: 'blur' }
  ],
  description: [
    { required: true, message: '请输入描述', trigger: 'blur' }
  ],
  recordTime: [
    { required: false, message: '请选择记录的日期', trigger: 'blur' }
  ],
  sort: [
    { required: false, message: '请输入排序', trigger: 'blur' }
  ],
})

// 判断是否为视频文件
const isVideo = (url: string) => {
  if (!url) return false
  const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm']
  return videoExtensions.some(ext => url.toLowerCase().includes(ext))
}

// 判断当前是否为视频表单
const isVideoForm = computed(() => {
  return dialog.type === 'video'
})

// 批量上传表单数据
const batchUploadForm = reactive<any>({
  files: [],
  description: '',
  recordTime: '',
  sort: 1
})
// 批量上传表单校验规则
const batchUploadRules = reactive<FormRules>({
  files: [
    {
      required: true,
      validator: (rule: any, value: any, callback: any) => {
        if (!value || value.length === 0) {
          callback(new Error('请上传照片'))
        } else {
          callback()
        }
      },
      trigger: 'change'
    }
  ],
  description: [
    { required: true, message: '请输入描述', trigger: 'blur' }
  ],
  recordTime: [
    { required: false, message: '请选择记录的日期', trigger: 'blur' }
  ],
  sort: [
    { required: false, message: '请输入排序起始值', trigger: 'blur' }
  ]
})
// 批量上传对话框控制
const batchUploadDialog = reactive({
  visible: false
})

const batchUploadLoading = ref(false)
const batchUploadFormRef = ref<FormInstance>()
// 视频上传表单数据
const videoForm = reactive<any>({
  url: '',
  description: '',
  recordTime: '',
  sort: 1
})

// 视频上传表单校验规则
const videoRules = reactive<FormRules>({
  url: [
    { required: true, message: '请上传视频', trigger: 'blur' }
  ],
  description: [
    { required: true, message: '请输入描述', trigger: 'blur' }
  ],
  recordTime: [
    { required: false, message: '请选择记录的日期', trigger: 'blur' }
  ],
  sort: [
    { required: false, message: '请输入排序', trigger: 'blur' }
  ]
})

// 视频上传对话框控制
const videoDialog = reactive({
  title:'',  
  visible: false,
  type: 'add'
})

const videoLoading = ref(false)
const videoFormRef = ref<FormInstance>()

// 视频播放对话框控制
const videoPlayerDialog = reactive({
  visible: false
})

const videoPlayerRef = ref<HTMLVideoElement | null>(null)

// 批量上传按钮点击事件
const handleBatchUpload = () => {
  batchUploadDialog.visible = true
  batchUploadForm.files = []
  batchUploadForm.recordTime = ''
  batchUploadForm.sort = 1
}

// 取消批量上传
const cancelBatchUpload = () => {
  batchUploadDialog.visible = false
  batchUploadFormRef.value?.resetFields()
}

// 提交批量上传
const submitBatchUpload = async () => {
  if (!batchUploadFormRef.value) return

  await batchUploadFormRef.value.validate(async (valid) => {
    if (valid) {
      batchUploadLoading.value = true
      try {
        // 构造照片数据
        const photoList = batchUploadForm.files.map((url: string, index: number) => ({
          albumId: props.albumId,
          url: url,
          description: batchUploadForm.description, 
          recordTime: batchUploadForm.recordTime || null,
          sort: batchUploadForm.sort + index
        }))

        // 调用批量添加接口
        await addBatchPhotoApi(photoList)
        ElMessage.success('批量上传成功')
        batchUploadDialog.visible = false
        getList()
      } catch (error) {
        console.error('批量上传失败:', error)
        ElMessage.error('批量上传失败')
      } finally {
        batchUploadLoading.value = false
      }
    }
  })
}

// 新增视频按钮点击事件
const handleAddVideo = () => {
     videoDialog.type = 'add'
    videoDialog.title = '新增视频'
  videoDialog.visible = true
  videoForm.url = ''
  videoForm.description = ''
  videoForm.recordTime = ''
  videoForm.sort = 1
}

// 取消视频上传
const cancelVideo = () => {
  videoDialog.visible = false
  videoFormRef.value?.resetFields()
}

// 提交视频上传
const submitVideo = async () => {
  if (!videoFormRef.value) return

  await videoFormRef.value.validate(async (valid) => {
    if (valid) {
      videoLoading.value = true
      try {
        // 检查是否有id来判断是新增还是编辑
        if (videoForm.id) {
          // 编辑视频
          await updatePhotoApi(videoForm)
          ElMessage.success('修改视频成功')
        } else {
          // 新增视频
          const videoData = {
            albumId: props.albumId,
            url: videoForm.url,
            description: videoForm.description,
            recordTime: videoForm.recordTime || null,
            sort: videoForm.sort
          }
          await addPhotoApi(videoData)
          ElMessage.success('新增视频成功')
        }
        videoDialog.visible = false
        getList()
      } catch (error) {
        console.error('操作失败:', error)
        ElMessage.error('操作失败')
      } finally {
        videoLoading.value = false
      }
    }
  })
}

watch(() => props.openPhotos, (newVal) => {
  if (newVal) {
    selectedIds.value = []
    getList()
    getAlbumList()
  }
})

// 获取标签列表
const getList = async () => {
  loading.value = true
  try {
    queryParams.albumId = props.albumId
    const { data } = await listPhotoApi(queryParams)
    photoList.value = data.records
    total.value = data.total
  } catch (error) {
  }
  loading.value = false
}

// 全选
const handleAllSelect = () => {
  if (photoList.value.length === selectedIds.value.length) {
    selectedIds.value = []
  } else {
    selectedIds.value = photoList.value.map(item => item.id)
  }
}

// 批量移动
const handleBatchMove = () => {
  if (selectedIds.value.length === 0) return
  moveDialog.visible = true
}

// 移动对话框数据
const moveDialog = reactive({
  visible: false,
  targetAlbumId: undefined
})

// 确认移动
const confirmMove = async () => {
  if (!moveDialog.targetAlbumId) {
    ElMessage.warning('请选择目标相册')
    return
  }

  try {
    await movePhotoApi({
      photoIds: selectedIds.value,
      albumId: moveDialog.targetAlbumId
    })
    ElMessage.success('移动成功')
    moveDialog.visible = false
    moveDialog.targetAlbumId = undefined
    selectedIds.value = []
    getList()
  } catch (error) {
    console.error('移动失败:', error)
  }
}

// 取消移动
const cancelMove = () => {
  moveDialog.visible = false
  moveDialog.targetAlbumId = undefined
}

// 获取所有相册
const getAlbumList = async () => {
  const { data } = await listAlbumAllApi()
  albumList.value = data
}

// 批量删除
const handleBatchDelete = () => {
  if (selectedIds.value.length === 0) return

  ElMessageBox.confirm(`是否确认删除 ${selectedIds.value.length} 个照片?`, '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    try {
      await deletePhotoApi(selectedIds.value)
      ElMessage.success('批量删除成功')
      getList()
      selectedIds.value = []
    } catch (error) {
    }
  })
}

// 删除
const handleDelete = (row: any) => {
  ElMessageBox.confirm(`是否确认删除 ${row.description} 这个照片?`, '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    try {
      await deletePhotoApi(row.id)
      ElMessage.success('删除成功')
      getList()
    } catch (error) {
    }
  })
}

// 新增相册
const handleAdd = () => {
  dialog.type = 'add'
  dialog.title = '新增照片'
  dialog.visible = true
  photoForm.id = undefined
  photoForm.albumId = props.albumId
  photoForm.name = ''
  photoForm.description = ''
  photoForm.url = ''
  photoForm.recordTime = ''
  photoForm.sort = 1
}

// 修改
const handleUpdate = (row: any) => {
  if (isVideo(row.url)) {
    // 如果是视频，使用视频上传对话框进行编辑
    videoDialog.type = 'edit'
    videoDialog.title = '修改视频'
    videoDialog.visible = true
    videoForm.url = row.url
    videoForm.description = row.description
    videoForm.recordTime = row.recordTime
    videoForm.sort = row.sort
    videoForm.id = row.id
    videoForm.name = row.name
    videoForm.albumId = row.albumId
  } else {
    // 如果是图片
    dialog.type = 'edit'
    dialog.title = '修改照片'
    dialog.visible = true
    Object.assign(photoForm, row)
    photoForm.createTime = undefined
  }
}

// 关闭预览
const closeViewer = () => {
  openPreview.value = false
  previewList.value = []
}

// 查看照片/视频
const handlePreviewPhotos = (item: any) => {
  if (isVideo(item.url)) {
    // 如果是视频，打开视频播放器
    videoPlayerDialog.visible = true
    nextTick(() => {
      if (videoPlayerRef.value) {
        videoPlayerRef.value.src = item.url
      }
    })
  } else {
    // 如果是图片，使用图片查看器
    previewList.value = [item.url]
    openPreview.value = true
  }
}

// 提交表单
const submitForm = async () => {
  if (!photoFormRef.value) return

  await photoFormRef.value.validate(async (valid) => {
    if (valid) {
      submitLoading.value = true
      try {
        if (dialog.type === 'add') {
          await addPhotoApi(photoForm)
          ElMessage.success('新增成功')
        } else {
          await updatePhotoApi(photoForm)
          ElMessage.success('修改成功')
        }
        getList()
        dialog.visible = false
      } catch (error) {
      } finally {
        submitLoading.value = false
      }
    }
  })
}

// 取消按钮
const cancel = () => {
  dialog.visible = false
  photoFormRef.value?.resetFields()
}

// 分页大小改变
const handleSizeChange = (val: number) => {
  queryParams.pageSize = val
  getList()
}

// 页码改变
const handleCurrentChange = (val: number) => {
  queryParams.pageNum = val
  getList()
}

// 处理弹框关闭
const handleDialogClose = (val: boolean) => {
  emit('update:openPhotos', val)
}
</script>

<style scoped lang="scss">
.photo-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;

  .photo-card {
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);

      .photo-overlay {
        opacity: 1;

        .photo-content {
          transform: translateY(0);
          opacity: 1;
        }

        .photo-actions {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }

    .photo-select {
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 2;
    }

    .photo-image {
      border-radius: 12px;
      width: 300px;
      height: 200px;
      object-fit: cover;
      display: block;
    }
    
    .video-container {
      position: relative;
      
      .play-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 40px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .photo-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.7) 100%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      opacity: 0;
      transition: opacity 0.4s ease;
      border-radius: 12px;
    }

    .photo-content {
      padding: 20px 15px;
      color: #fff;
      transform: translateY(-20px);
      opacity: 0;
      transition: all 0.4s ease;

      .photo-time {
        font-size: 14px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 5px;
        opacity: 0.9;

        .time-text {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
      }

      .photo-desc {
        font-size: 14px;
        line-height: 1.5;
        opacity: 0.95;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
      }
    }

    .photo-actions {
      display: flex;
      justify-content: center;
      gap: 15px;
      padding: 15px;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.4s ease;

      :deep(.el-button) {
        font-weight: 500;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.05);
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
}

.video-player-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>