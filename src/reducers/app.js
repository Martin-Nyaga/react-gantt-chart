import itemsReducer from './items'
import { combineReducers } from 'redux'

const appReducer = combineReducers({
  items: itemsReducer
})

export default appReducer
