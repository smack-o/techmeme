import { combineReducers } from 'redux'
import counter from './counter'
import restaurant from './restaurant'
import recommend from './recommend'
export default combineReducers({
  counter,
  restaurant,
  recommend
})
