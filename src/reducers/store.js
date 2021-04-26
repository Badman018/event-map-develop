import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import userReducer from './userReducer'
import errorReducer from './errorReducer'
import { rootSaga } from './../sagas/index'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  user: userReducer,
  error: errorReducer,
})

const tools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducers,
  tools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)
