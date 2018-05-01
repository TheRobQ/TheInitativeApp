import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const middleware = [
  logger,
  thunk
]

const store = createStore(
  applyMiddleware(...middleware)
)

export default store
