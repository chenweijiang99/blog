import request from '@/utils/request'

// 获取说说列表
export function getMoments(params) {
  return request({
    url: '/api/moment/list',
    method: 'get',
    params
  })
}

export function getMyMomentsApi(params) {
  return request({
    url: '/api/moment/myMoments',
    method: 'get',
    params
  })
}

export function deleteMyMomentApi(id) {
  return request({
    url: '/api/moment/deleteMyMoments',
    method: 'delete',
    params: { id }  // 将ID作为查询参数传递
  })
}

export function addMomentApi(data) {
  return request({
    url: '/api/moment/addMoment',
    method: 'post',
    data
  })
}

export function updateMomentApi(data) {
  return request({
    url: '/api/moment/updateMoment',
    method: 'post',
    data
  })
}

export function getMomentByIdApi(id) {
  return request({
    url: `/api/moment/getMoment/`,
    method: 'get',
    params: { id }
  })
}
