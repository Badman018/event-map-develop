import { put, takeEvery } from '@redux-saga/core/effects'
import { saveUserData, setError, SIGN_IN_EMAIL_REQUEST, SIGN_IN_GOOGLE_REQUEST } from '../actions'
import { signInByEmailFirebase, signInByGoogleFirebase } from './../utils/firebase'

function * userSignInEmail ({ payload }) {
  try {
    const userData = yield signInByEmailFirebase(payload.email, payload.password)
    yield put(saveUserData(userData))
  } catch (e) {
    yield put(setError(e))
  }
}

function * userSignInByGoogle () {
  try {
    const userData = yield signInByGoogleFirebase()
    yield put(saveUserData(userData))
  } catch (e) {
    yield put(setError(e))
  }
}

export function * userRequestWatcher () {
  yield takeEvery(SIGN_IN_EMAIL_REQUEST, userSignInEmail)
  yield takeEvery(SIGN_IN_GOOGLE_REQUEST, userSignInByGoogle)
}
