import { handleActions } from 'redux-actions'
import { GET_LIST, GET_ARTICLE } from '../types/restaurant'

export default handleActions({
  [GET_LIST] (state, action) {
    console.log('reducers', state, action)
    return {
      ...state,
      list: action.payload.data
    }
  },
  [GET_ARTICLE] (state, action) {
    console.log(action.payload)
    return {
      ...state,
      article: action.payload.data
    }
  }
}, {
  list: [],
  article: null
})
