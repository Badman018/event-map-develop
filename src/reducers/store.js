import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from '@/sagas/index'

import userReducer from './userReducer'
import errorReducer from './errorReducer'
import eventsReducer from './eventsReducer'

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
