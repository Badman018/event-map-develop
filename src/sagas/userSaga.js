import { put, takeEvery } from '@redux-saga/core/effects'
import { saveUserData, setError, SIGN_IN_EMAIL_REQUEST, SIGN_IN_GOOGLE_REQUEST, SIGN_IN_VALIDATION } from '../actions'
import { signInByEmailFirebase, signInByGoogleFirebase } from './../utils/firebase'
import firebase from '@/utils/firebase'

function * userSignInByEmailAndPassword ({ payload }) {
  try {
    const userData = yield signInByEmailFirebase(payload.email, payload.password)
    yield put(saveUserData(userData))
  } catch (e) {
    yield put(setError(e.code, e.message))
  }
}

function * userSignInValidation ({ payload }) {
  try {
    yield firebase.auth().onAuthStateChanged(user => {
      if (user) {
        payload(user)
      } else {
        console.log(user)
      }
    })
  } catch (e) {
    yield put(setError(e.code, e.message))
  }
}

function * userSignInByGoogle () {
  try {
    const userData = yield signInByGoogleFirebase()
    yield put(saveUserData(userData))
  } catch (e) {
    yield put(setError(e.code, e.message))
  }
}

export function * userRequestWatcher () {
  yield takeEvery(SIGN_IN_EMAIL_REQUEST, userSignInByEmailAndPassword)
  yield takeEvery(SIGN_IN_GOOGLE_REQUEST, userSignInByGoogle)
  yield takeEvery(SIGN_IN_VALIDATION, userSignInValidation)
}
