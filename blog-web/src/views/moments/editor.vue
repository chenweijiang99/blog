<template>
  <div class="moment-editor-container">
    <div class="editor-main">
      <el-form :model="momentForm" :rules="rules" ref="momentForm" label-position="top" size="small">
        <div class="editor-content">
          <div class="content-card">
            <el-form-item label="说说内容" prop="content">
              <div style="border: 1px solid #ccc">
                <Toolbar
                  style="border-bottom: 1px solid #ccc"
                  :editor="editorRef"
                  :defaultConfig="toolbarConfig"
                  :mode="mode"
                />
                <Editor
                  style="overflow-y: hidden; min-height: 300px"
                  v-model="momentForm.content"
                  :defaultConfig="editorConfig"
                  :mode="mode"
                  @onCreated="handleCreated"
                />
              </div>
            </el-form-item>
          </div>

          <div class="content-card">
            <el-form-item label="图片" prop="images">
              <div class="image-upload-area">
                <div 
                  class="image-preview" 
                  v-for="(image, index) in momentForm.images" 
                  :key="index"
                >
                  <img :src="image" alt="说说图片">
                  <div class="image-actions">
                    <el-button size="small" circle type="danger" @click="removeImage(index)">
                      <i class="fas fa-trash"></i>
                    </el-button>
                  </div>
                </div>
                <div 
                  class="image-upload-placeholder" 
                  v-if="momentForm.images.length < 9"
                  @click="triggerImageUpload"
                >
                  <i class="fas fa-plus"></i>
                  <span>上传图片</span>
                </div>
              </div>
              <input 
                ref="imageInput" 
                type="file" 
                accept="image/*" 
                @change="handleImageUpload" 
                style="display: none"
                multiple
              >
            </el-form-item>
          </div>
        </div>

        <div class="editor-sidebar">
          <div class="sidebar-section">
            <div class="setting-item">
              <el-button size="small" @click="saveDraft">
                <i class="fas fa-save"></i>
                保存草稿
              </el-button>
              <el-button size="small" type="primary" @click="publishMoment">
                <i class="fas fa-paper-plane"></i>
                提交说说
              </el-button>
            </div>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { uploadFileApi, deleteFileApi } from '@/api/file'
import { addMomentApi, updateMomentApi, getMomentByIdApi } from '@/api/moments'

// 导入 wangEditor
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'

export default {
  name: 'MomentEditor',
  components: {
    Editor,
    Toolbar
  },
  data() {
    return {
      momentForm: {
        id: undefined,
        content: '',
        images: []
      },
      rules: {
        content: [
          { required: true, message: '请输入说说内容', trigger: 'blur' },
          { min: 1, max: 500, message: '内容长度应在1-500个字符之间', trigger: 'blur' }
        ]
      },
      isSubmitting: false,
      
      // wangEditor 配置
      editorRef: null,
      mode: 'default',
      toolbarConfig: {},
      editorConfig: {
        placeholder: '分享你的想法...',
        MENU_CONF: {
          codeSelectLang: {
            // 代码语言
            codeLangs: [
              { text: "CSS", value: "css" },
              { text: "HTML", value: "html" },
              { text: "XML", value: "xml" },
              { text: "Java", value: "java" },
            ],
          },
        },
      }
    }
  },
  created() {
    // 如果是编辑模式，获取说说详情
    const momentId = this.$route.query.id
    if (momentId) {
      this.getMomentInfo(momentId)
    }
  },
  methods: {
    /**
     * 获取说说详情
     */
    getMomentInfo(id) {
      getMomentByIdApi(id).then(res => {
        const moment = res.data
        this.momentForm = {
          id: moment.id,
          content: moment.content,
          images: moment.images ? moment.images.split(',') : []
        }
      })
    },

    /**
     * 保存草稿
     */
    saveDraft() {
      this.$message.info('说说暂不支持保存草稿功能')
      // 可以根据需要实现草稿功能
    },

    /**
     * 发布说说
     */
    publishMoment() {
      if (this.isSubmitting) return
      this.$refs.momentForm.validate(valid => {
        if (!valid) return
        this.isSubmitting = true
        
        const formData = {
          id: this.momentForm.id,
          content: this.momentForm.content,
          images: this.momentForm.images && this.momentForm.images.length > 0 
            ? this.momentForm.images.join(',') 
            : null
        }
        
        const api = this.momentForm.id ? updateMomentApi : addMomentApi
        api(formData).then(res => {
          this.$message.success(this.momentForm.id ? '说说更新成功' : '说说发布成功')
          this.$router.push('/user/profile?tab=moments')
        }).catch(err => {
          this.$message.error(err.message)
        }).finally(() => {
          this.isSubmitting = false
        })
      })
    },

    /**
     * 富文本编辑器创建完成
     */
    handleCreated(editor) {
      this.editorRef = editor // 记录 editor 实例，重要！
    },

    /**
     * 触发图片上传
     */
    triggerImageUpload() {
      this.$refs.imageInput.click()
    },

    /**
     * 处理图片上传
     */
    handleImageUpload(e) {
      const files = e.target.files
      if (!files || files.length === 0) return

      // 限制最多9张图片
      const remainingSlots = 9 - this.momentForm.images.length
      if (remainingSlots <= 0) {
        this.$message.warning('最多只能上传9张图片')
        return
      }

      const filesToUpload = Array.from(files).slice(0, remainingSlots)
      
      // 逐个上传图片
      filesToUpload.forEach(file => {
        const formData = new FormData()
        formData.append('file', file)
        
        uploadFileApi(formData, 'moment').then(res => {
          if (res.code === 200) {
            this.momentForm.images.push(res.data)
            this.$message.success('图片上传成功')
          } else {
            this.$message.error(res.message || '上传失败')
          }
        }).catch(error => {
          this.$message.error('图片上传失败，请重试')
        })
      })

      // 清空 input 的值
      e.target.value = ''
    },

    /**
     * 删除图片
     */
    removeImage(index) {
      this.momentForm.images.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.moment-editor-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.editor-main {
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 40px;
  width: 100%;

  .el-form {
    display: flex;
    gap: 24px;
  }
}

.editor-content {
  flex: 1;
  min-width: 0;

  .content-card {
    background: var(--card-bg);
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    padding: 24px;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  :deep(.el-form-item) {
    margin-bottom: 0;

    .el-form-item__label {
      padding-bottom: 12px;
      font-size: 13px;
      color: #999;
      font-weight: normal;
    }
  }

  .image-upload-area {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .image-preview {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 4px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-actions {
      position: absolute;
      top: 8px;
      right: 8px;
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover .image-actions {
      opacity: 1;
    }
  }

  .image-upload-placeholder {
    width: 120px;
    height: 120px;
    border-radius: 4px;
    border: 1px dashed var(--border-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #999;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      border-color: #409EFF;
      color: #409EFF;
    }

    i {
      font-size: 24px;
    }

    span {
      font-size: 13px;
    }
  }
}

.editor-sidebar {
  width: 320px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .sidebar-section {
    background: var(--card-bg);
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    padding: 24px;

    .setting-item {
      padding: 12px 0;

      &:last-child {
        padding-bottom: 0;
      }

      &:first-child {
        padding-top: 0;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .editor-main {
    padding: 24px;

    .el-form {
      flex-direction: column;
    }
  }

  .editor-sidebar {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .editor-main {
    padding: 16px;

    .el-form {
      gap: 16px;
    }
  }

  .editor-content {
    .content-card {
      padding: 20px;
      margin-bottom: 16px;
    }
  }

  .editor-sidebar {
    gap: 16px;

    .sidebar-section {
      padding: 20px;
    }
  }
}

// wangEditor 样式
:deep(.w-e-full-screen-container) {
  z-index: 2002 !important;
}
</style>