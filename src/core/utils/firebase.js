import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBNR3t8sLK95MFmQM474zGIhX-GTwusWKk',
  authDomain: 'event-map-2f3a4.firebaseapp.com',
  databaseURL: 'https://event-map-2f3a4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'event-map-2f3a4',
  storageBucket: 'event-map-2f3a4.appspot.com',
  messagingSenderId: '97677226621',
  appId: '1:97677226621:web:6d3fb20c836ece29f03714',
}

firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()

export const database = firebase.database()

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()

export default firebase

export const signInByEmailFirebase = async (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => user)
}

export const signOutFirebase = () => {
  return firebase
    .auth()
    .signOut()
}

export const signInByGoogleFirebase = async () => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(({ user }) => user)
}
