import { GET_LIST, GET_ARTICLE } from '../types/restaurant'
import { createAction } from 'redux-actions'
import wepy from 'wepy'
export const getRestaurantList = createAction(GET_LIST, () => {
  return new Promise((resolve) => {
    wepy.request({
      url: '/api/topic/homelist',
      success (response) {
        resolve(response.data)
      }
    })
  })
})

export const getArticle = createAction(GET_ARTICLE, (data) => {
  return new Promise((resolve) => {
    wepy.request({
      url: `/api/restaurant/${data.id}`,
      success (response) {
        resolve(response.data)
      }
    })
  })
})
