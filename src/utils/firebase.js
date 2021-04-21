import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBSAE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBSAE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBSAE_APP_ID,
}

firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()
export default firebase

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
