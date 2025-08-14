import request from '@/utils/request'

/**
 * 获取照片列表
 */
export function listPhotoApi(params?: any) {
    return request({
        url: '/sys/photo/list',
        method: 'get',
        params
    })
}

/**
 * 获取照片详情
 */
export function detailPhotoApi(id: any) {
    return request({
        url: '/sys/photo/' + id,
        method: 'get'
    })
}

/**
 * 添加照片
 */
export function addPhotoApi(data: any) {
    return request({
        url: '/sys/photo/add',
        method: 'post',
        data
    })
}

/**
 * 修改照片
 */
export function updatePhotoApi(data: any) {
    return request({
        url: `/sys/photo/update`,
        method: 'put',
        data
    })
}

/**
 * 删除照片
 */
export function deletePhotoApi(ids: number[] | number) {
    return request({
        url: `/sys/photo/delete/` + ids,
        method: 'delete'
    })
}

/**
 * 批量移动照片
 */
export function movePhotoApi(data: { photoIds: number[], albumId: number }) {
    return request({
        url: '/sys/photo/move/' + data.photoIds,
        method: 'put',
        params: {
            albumId: data.albumId
        }
    })
}

// 添加批量添加照片的 API 接口
export const addBatchPhotoApi = (data: any[]) => {
  return request({
    url: '/sys/photo/addBatch',
    method: 'post',
    data: data
  })
}



