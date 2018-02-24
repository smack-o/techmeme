import { handleActions } from 'redux-actions'
import { GET_LIST, GET_ARTICLE, GET_TOPIC_ARTICLES, TOPIC_ARTICLES_LOADING, TOPIC_ARTICLES_LOADED } from '../types/restaurant'

export default handleActions({
  [GET_LIST] (state, action) {
    return {
      ...state,
      list: action.payload.data
    }
  },
  [GET_ARTICLE] (state, action) {
    return {
      ...state,
      article: action.payload.data
    }
  },
  [GET_TOPIC_ARTICLES] (state, action) {
    return {
      ...state,
      articles: action.payload.data.articles,
      topic: action.payload.data.topic
    }
  },
  [TOPIC_ARTICLES_LOADING] (state, action) {
    console.log(111)
    return {
      ...state,
      articlesLoading: true
    }
  },
  [TOPIC_ARTICLES_LOADED] (state, action) {
    return {
      ...state,
      articlesLoading: false
    }
  }
}, {
  list: [],
  article: {},
  articles: [],
  topic: {},
  articlesLoading: false
})
