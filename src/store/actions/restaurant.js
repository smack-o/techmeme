import { GET_LIST, GET_ARTICLE, GET_TOPIC_ARTICLES } from '../types/restaurant'
import { createAction } from 'redux-actions'
import wepy from 'wepy'
import store from '../'

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

export const getTopicArticles = createAction(GET_TOPIC_ARTICLES, (data) => {
  store.dispatch({
    type: 'TOPIC_ARTICLES_LOADING'
  })
  return new Promise((resolve) => {
    wepy.request({
      url: `/api/topic/${data.id}`,
      success (response) {
        store.dispatch({
          type: 'TOPIC_ARTICLES_LOADED'
        })
        resolve(response.data)
      }
    })
  })
})
