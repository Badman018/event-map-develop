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

export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

window.store = store
