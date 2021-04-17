import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBNR3t8sLK95MFmQM474zGIhX-GTwusWKk',
  authDomain: 'event-map-2f3a4.firebaseapp.com',
  projectId: 'event-map-2f3a4',
  storageBucket: 'event-map-2f3a4.appspot.com',
  messagingSenderId: '97677226621',
  appId: '1:97677226621:web:6d3fb20c836ece29f03714',
}

const fire = firebase.initializeApp(firebaseConfig)
export default fire
