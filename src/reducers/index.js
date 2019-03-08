import {
  combineReducers
} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import todos from './todos'
import visibilityFilter from './visibilityFilter'


const todoAppCombinedReducer = combineReducers({
  toastr: toastrReducer,
  todos,
  visibilityFilter
});
export default todoAppCombinedReducer;