import tasksReducer from './tasks'
import { combineReducers } from 'redux'

const appReducer = combineReducers({
  tasks: tasksReducer
})

export default appReducer
