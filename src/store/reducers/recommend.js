import { handleActions } from 'redux-actions'
import { GET_LIST, GET_RECOMMENT } from '../types/recommend'

export default handleActions({
  [GET_LIST] (state, action) {
    return {
      ...state,
      list: action.payload.data.list
    }
  },
  [GET_RECOMMENT] (state, action) {
    return {
      ...state,
      recommend: action.payload.data
    }
  }
}, {
  list: [],
  recommend: {}
})
