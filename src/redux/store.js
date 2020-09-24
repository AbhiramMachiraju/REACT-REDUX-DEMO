import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import cakeReducer from './cake/cakeReducer'



const store = createStore(cakeReducer,composeWithDevTools(applyMiddleware(logger)))


export default store