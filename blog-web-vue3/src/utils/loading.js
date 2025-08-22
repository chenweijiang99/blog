import { createVNode, render } from 'vue'
import Loading from '@/components/common/Loading.vue'

let loadingInstance = null

export const showLoading = () => {
  if (!loadingInstance) {
    // 创建虚拟节点
    const vnode = createVNode(Loading)
    // 渲染到真实DOM
    const container = document.createElement('div')
    document.body.appendChild(container)
    render(vnode, container)
    loadingInstance = {
      vnode,
      container
    }
  }
  // 显示loading组件（需要组件支持visible属性）
  if (loadingInstance.vnode.component) {
    loadingInstance.vnode.component.props.visible = true
  }
}

export const hideLoading = () => {
  if (loadingInstance) {
    // 隐藏loading组件
    if (loadingInstance.vnode.component) {
      loadingInstance.vnode.component.props.visible = false
    }
    
    // 延迟卸载以确保动画完成
    setTimeout(() => {
      if (loadingInstance && loadingInstance.container) {
        try {
          render(null, loadingInstance.container)
          document.body.removeChild(loadingInstance.container)
        } catch (e) {
          console.warn('Error removing loading element:', e)
        }
        loadingInstance = null
      }
    }, 300) // 根据你的动画时间调整
  }
}