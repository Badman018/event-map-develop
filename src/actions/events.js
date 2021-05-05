export const SAVE_NEW_MARKER = 'events-map/events/SAVE_NEW_MARKER'
export const SAVE_MARKERS_DATA = 'events-map/events/SAVE_MARKERS_DATA'
export const GET_MARKERS_REQUEST = 'events-map/events/GET_MARKERS_REQUEST'
export const CHANGE_MARKER_POPUP = 'events-map/events/CHANGE_MARKER_POPUP'
export const CHANGE_TEMPORARY_MARKER = 'events-map/events/CHANGE_TEMPORARY_MARKER'
export const REMOVE_TEMPORARY_MARKER = 'events-map/events/REMOVE_TEMPORARY_MARKER'
export const REMOVE_MARKERS_DATA = 'events-map/events/REMOVE_MARKERS_DATA'

export const saveNewMarker = (id, author, position, popup, privacy, notifications) => ({
  type: SAVE_NEW_MARKER,
  payload: { id, author, position, popup, privacy, notifications },
})
export const changeMarkerPopup = (id, author, position, popup, privacy, notifications) => ({
  type: CHANGE_MARKER_POPUP,
  payload: { id, author, position, popup, privacy, notifications },
})
export const getMarkersRequest = () => ({ type: GET_MARKERS_REQUEST })
export const saveMarkersData = payload => ({
  type: SAVE_MARKERS_DATA,
  payload,
})
export const changeTemporaryMarker = (id, author, position, popup, privacy, notifications) => ({
  type: CHANGE_TEMPORARY_MARKER,
  payload: { id, author, position, popup, privacy, notifications },
})
export const removeTemporaryMarker = () => ({
  type: REMOVE_TEMPORARY_MARKER,
})
export const removeMarkersData = () => ({ type: REMOVE_MARKERS_DATA })
