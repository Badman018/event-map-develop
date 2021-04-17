import { put, takeEvery } from '@redux-saga/core/effects'
import { setError } from '../reducers/errorReducer'
import { saveUserData } from '../reducers/userReducer'
import fire from './../firebase'

const signInByEmailFirebase = (email, password) => {
  return fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => user)
}

function * userSignInEmail ({ payload }) {
  try {
    const userData = yield signInByEmailFirebase(payload.email, payload.password)
    yield put(saveUserData(userData))
  } catch (e) {
    yield put(setError(e))
  }
}

export function * userRequestWatcher () {
  yield takeEvery('SIGN_IN_EMAIL_REQUEST', userSignInEmail)
}
