import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'
import {switchReducer} from './reducers/switchReducer'

const initialState = {
}
const middleWare = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store