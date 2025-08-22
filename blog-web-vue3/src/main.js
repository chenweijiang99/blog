import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import gsap from 'gsap'
import 'animate.css'
import VueLazyLoad from 'vue3-lazyload' 

import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// 配置 vue-lazyload
const app = createApp(App)

app.use(VueLazyLoad, {  // 修改使用方式
  loading: new URL('./assets/lazy.gif', import.meta.url).href,
  error: new URL('./assets/img-error.jpg', import.meta.url).href,
  preload: 1.3,
  attempt: 1,
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 引入Element Plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
app.use(ElementPlus);
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

//表情组件
import EmojiPicker from '@/components/common/EmojiPicker.vue'
app.component('mj-emoji', EmojiPicker)

import ClickOutside from '@/directives/clickOutside'
app.directive('click-outside', ClickOutside)

//加载组件（自定义指令，避免与Element Plus冲突）
import loading from './directives/loading'
app.directive('custom-loading', loading)

//高亮
import 'highlight.js/styles/atom-one-dark.css'
import { animateOnScroll } from './directives/animate'
app.directive('animate-on-scroll', animateOnScroll)

//图片预览组件
import ImagePreview from '@/components/common/ImagePreview.vue'
app.component('mj-image-preview', ImagePreview)

import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
app.use(mavonEditor);

// 注册全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
app.component('svg-icon', SvgIcon)

app.use(store)
app.use(router)

// 为了支持 HMR
if (import.meta.hot) {
  import.meta.hot.accept()
}

app.mount('#app')