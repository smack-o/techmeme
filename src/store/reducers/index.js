import { combineReducers } from 'redux'
import counter from './counter'
import restaurant from './restaurant'

export default combineReducers({
  counter,
  restaurant
})
