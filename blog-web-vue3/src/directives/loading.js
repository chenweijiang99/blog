import { createVNode, render } from 'vue'
import Loading from '../components/common/Loading.vue'

export default {
  mounted(el, binding) {
    // 设置父元素定位，以便loading可以相对定位
    const position = getComputedStyle(el).position
    if (position === 'static' || position === '') {
      el.style.position = 'relative'
    }
    
    // 确保父元素有明确的高度
    if (el.style.minHeight === '') {
      el.style.minHeight = '100px'
    }
    
    // 创建loading组件实例
    const vnode = createVNode(Loading, {
      local: true // 默认使用局部加载模式
    })
    
    // 创建一个容器元素
    const container = document.createElement('div')
    el.loadingContainer = container
    
    // 渲染组件
    render(vnode, container)
    el.appendChild(container.firstChild)
    
    // 保存实例引用
    el.loadingInstance = vnode.component
    
    if (binding.value) {
      el.loadingInstance.props.visible = true
    }
  },
  
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      if (el.loadingInstance) {
        el.loadingInstance.props.visible = binding.value
      }
    }
  },
  
  unmounted(el) {
    if (el.loadingInstance && el.loadingContainer && el.loadingContainer.firstChild) {
      el.removeChild(el.loadingContainer.firstChild)
      render(null, el.loadingContainer)
      el.loadingInstance = null
      el.loadingContainer = null
    }
  }
}