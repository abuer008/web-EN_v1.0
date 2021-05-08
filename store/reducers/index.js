import { combineReducers } from 'redux'
import { switchReducer } from './switchReducer'

export default combineReducers({
    language: switchReducer
})