import { GET_LIST } from '../types/restaurant'
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
