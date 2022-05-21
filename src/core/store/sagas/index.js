import { all } from 'redux-saga/effects'
import { eventsRequestWatcher } from './events'
import { userRequestWatcher } from './user'

export function * rootSaga () {
  yield all([
    eventsRequestWatcher(),
    userRequestWatcher(),
  ])
}
