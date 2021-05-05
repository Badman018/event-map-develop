import { all } from 'redux-saga/effects'
import { eventsRequestWatcher } from './eventsSaga'
import { userRequestWatcher } from './userSaga'

export function * rootSaga () {
  yield all([
    eventsRequestWatcher(),
    userRequestWatcher(),
  ])
}
