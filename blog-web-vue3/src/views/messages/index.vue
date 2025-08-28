<template>
  <div>
    <!-- banner -->
    <div class="message-banner" :style="cover">
      <!-- 弹幕输入框 -->
      <div class="message-container">
        <h1 class="message-title">留言板</h1>
        <div class="message-input-wrapper">
          <el-input 
            class="input" 
            v-model="content" 
            placeholder="说点什么吧" 
            @keyup.enter="addToList"
            @focus="show = true"
          ></el-input>
          <el-button 
            style="opacity: .6;" 
            class="ml-3" 
            round 
            @click="addToList" 
            v-show="show"
          >
            发送
          </el-button>
        </div>
      </div>
      <!-- 弹幕列表 -->
      <div class="barrage-container">
        <vue-danmaku
          class="danmaku"
          :danmus="barrageList"
          style="height: 100%; width: 100%"
          use-slot
          :speed="150"
          :channel-count="15"
        >
          <template #danmu="{ danmu }">
            <span class="barrage-items">
              <img
                :src="danmu.avatar"
                width="30"
                height="30"
                style="border-radius: 50%"
                alt="avatar"
              />
              {{ danmu.nickname }}:{{ danmu.content }}
            </span>
          </template>
        </vue-danmaku>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import VueDanmaku from 'vue-danmaku'
import { getMessagesApi, addMessageApi } from "@/api/message"

// 响应式数据
const show = ref(false)
const content = ref("")
const count = ref(null)
const timer = ref(null)
const barrageList = ref([])
const store = useStore()
const user = computed(() => store.state.userInfo)

// 计算属性
const cover = computed(() => {
  var coverUrl = new URL('@/assets/message-cover.jpg', import.meta.url).href
  return "background: url(" + coverUrl + ") center center / cover no-repeat"
})

// 方法
const addToList = () => {
  if (count.value) {
    ElMessage.error("30秒后才能再次留言")
    return false
  }
  if (content.value.trim() === "") {
    ElMessage.error("留言不能为空")
    return false
  }
  
  const message = {
    avatar: user.value ? user.value.avatar : store.state.webSiteInfo.touristAvatar,
    status: 1,
    nickname: user.value ? user.value.nickname : "游客",
    content: content.value
  }

  content.value = ""
  addMessageApi(message).then(res => {
    barrageList.value.push(message)
    ElMessage.success("留言成功")
  }).catch(err => {
    ElMessage.error("留言失败")
  })
  
  const TIME_COUNT = 30
  if (!timer.value) {
    count.value = TIME_COUNT
    timer.value = setInterval(() => {
      if (count.value > 0 && count.value <= 30) {
        count.value--
      } else {
        clearInterval(timer.value)
        timer.value = null
      }
    }, 1000)
  }
}

// 获取留言列表
const listMessage = () => {
  getMessagesApi().then(res => {
    barrageList.value = res.data || []
  })
}

// 生命周期
onMounted(() => {
  listMessage()
})
</script>

<style lang="scss" scoped>
:deep(.el-input__inner) {
  border-radius: 50px;
  opacity: .6;
}

.message-banner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $primary;
  animation: header-effect 1s;

  .message-container {
    position: absolute;
    width: 360px;
    top: 35%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 5;
    margin: 0 auto;
    color: #fff;

    .message-title {
      color: #eee;
      animation: title-scale 1s;
    }

    .message-input-wrapper {
      display: flex;
      justify-content: center;
      height: 2.5rem;
      margin-top: 2rem;

      .ml-3 {
        animation: left-in 1s ease;

        @keyframes left-in {
          0% {
            transform: translateY(-500%);
          }

          100% {
            transform: translateX(0);
          }
        }
      }
    }
  }

  .barrage-container {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;

    .barrage-items {
      background: rgba(0, 0, 0, 0.7);
      border-radius: 100px;
      color: #fff;
      padding: 5px 10px 5px 5px;
      align-items: center;
      display: inline-flex;
      margin-top: 10px;
    }
  }
}
</style>