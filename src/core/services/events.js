
import { firestore } from './../utils/firebase'

export const getFilterImagesFirebase = () => {
  return firestore
    .collection('events')
    .get()
    .then(querySnapshot => {
      const events = []
      querySnapshot.forEach(doc => {
        events.push(doc.data())
      })
      return events
    })
}

export const createNewEvent = (id, payload) => {
  return firestore
    .collection('events')
    .doc(id)
    .set(payload)
}
