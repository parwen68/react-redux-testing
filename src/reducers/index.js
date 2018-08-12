import { combineReducers } from 'redux'
import commetsReducer from 'reducers/comments'

export default combineReducers({
  comments: commetsReducer
})