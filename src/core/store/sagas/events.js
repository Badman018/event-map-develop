import { put, takeEvery } from '@redux-saga/core/effects'

import { GET_MARKERS_REQUEST, setError, saveMarkersData } from '../actions'
import { getFilterImagesFirebase, createNewEvent } from '../../services/events'
import { SAVE_NEW_MARKER } from './../actions/events'

function * saveMarkersDataRequest () {
  try {
    const data = yield getFilterImagesFirebase()
    yield put(saveMarkersData(data))
  } catch (e) {
    yield put(setError(e.code, e.message))
  }
}

function * addEventDataRequest (payload) {
  try {
    console.log({ payload })
    const data = yield createNewEvent(payload)
    yield put(saveMarkersData(data))
  } catch (e) {
    yield put(setError(e.code, e.message))
  }
}

export function * eventsRequestWatcher () {
  yield takeEvery(GET_MARKERS_REQUEST, saveMarkersDataRequest)
  yield takeEvery(SAVE_NEW_MARKER, addEventDataRequest)
}
