import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from '@/core/store/sagas/index'

import userReducer from './user'
import errorReducer from './error'
import eventsReducer from './events'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  user: userReducer,
  error: errorReducer,
  events: eventsReducer,
})

const tools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducers,
  tools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)
