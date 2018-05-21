import { handleActions } from 'redux-actions'
import { GET_LIST, GET_RECOMMENT, GET_GUID_LIST } from '../types/recommend'

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
  },
  [GET_GUID_LIST] (state, action) {
    return {
      ...state,
      guidList: action.payload.data.list
    }
  }
}, {
  guidList: [],
  list: [],
  recommend: {}
})
