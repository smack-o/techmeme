import { GET_LIST, GET_RECOMMENT, GET_GUID_LIST } from '../types/recommend'
import { createAction } from 'redux-actions'
import wepy from 'wepy'
// import store from '../'

export const getRecommendList = createAction(GET_LIST, (data = {}) => {
  return new Promise((resolve) => {
    const { editor = 0, pageNum = 1, pageSize = 9999999 } = data
    wepy.request({
      url: `/api/recommend/list?editor=${editor}&page_num=${pageNum}&page_size=${pageSize}`,
      success (response) {
        resolve(response.data)
      }
    })
  })
})

export const getCityGuidList = createAction(GET_GUID_LIST, (data = {}) => {
  return new Promise((resolve) => {
    const { editor = 1, pageNum = 1, pageSize = 9999999 } = data
    wepy.request({
      url: `/api/recommend/list?editor=${editor}&page_num=${pageNum}&page_size=${pageSize}`,
      success (response) {
        resolve(response.data)
      }
    })
  })
})

export const getRecommend = createAction(GET_RECOMMENT, (data = {}) => {
  return new Promise((resolve) => {
    wepy.request({
      url: `/api/recommend/${data.id}`,
      success (response) {
        resolve(response.data)
      }
    })
  })
})
