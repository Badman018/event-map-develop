import { put, takeEvery, select } from '@redux-saga/core/effects'

import { GET_MARKERS_REQUEST, saveMarkersData, setError } from './../actions'
import { getValuesFromDatabase } from './../utils/firebase'

function * saveMarkersDataRequest () {
  try {
    const author = yield select(state => state.user.userProfile.email)
    const eventsData = yield getValuesFromDatabase(author)
    yield put(saveMarkersData(eventsData))
  } catch (e) {
    yield put(setError(e.code, e.message))
  }
}

export function * eventsRequestWatcher () {
  yield takeEvery(GET_MARKERS_REQUEST, saveMarkersDataRequest)
}
