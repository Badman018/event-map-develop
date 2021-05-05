import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBSAE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBSAE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBSAE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
}

firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()
export default firebase
export const database = firebase.database()

export const getValuesFromDatabase = author => {
  return firebase
    .database()
    .ref('/Markers')
    .once('value')
    .then(snapshot => {
      return snapshot.val().filter(marker => {
        if (marker.author === author ||
          marker.privacy.public ||
          marker.privacy.availabilityUsers.some(user => user === author)) {
          return snapshot.val()
        }
        return null
      })
    })
}

export const signInByEmailFirebase = (email, password) => {
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

export const signInByGoogleFirebase = () => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(({ user }) => user)
}
