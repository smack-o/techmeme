import { handleActions } from 'redux-actions'
import { GET_LIST } from '../types/restaurant'

export default handleActions({
  [GET_LIST] (state, action) {
    console.log('reducers', state, action)
    return {
      ...state,
      list: action.payload.data
    }
  }
}, {
  list: []
})
