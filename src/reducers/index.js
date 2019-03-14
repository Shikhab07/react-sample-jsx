import {
  combineReducers
} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import UploadedFiles from './files'

const todoAppCombinedReducer = combineReducers({
  toastr: toastrReducer,
  todos,
  visibilityFilter,
  UploadedFiles
});
export default todoAppCombinedReducer;