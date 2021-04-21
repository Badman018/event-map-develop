import { all } from 'redux-saga/effects'
import { userRequestWatcher } from './userSaga'

export function * rootSaga () {
	yield all([
		userRequestWatcher(),
	])
}
