export const SAVE_NEW_MARKER = 'events-map/events/SAVE_NEW_MARKER'
export const SAVE_MARKERS_DATA = 'events-map/events/SAVE_MARKERS_DATA'
export const GET_MARKERS_REQUEST = 'events-map/events/GET_MARKERS_REQUEST'
export const CHANGE_MARKER_POPUP = 'events-map/events/CHANGE_MARKER_POPUP'
export const CHANGE_TEMPORARY_MARKER = 'events-map/events/CHANGE_TEMPORARY_MARKER'
export const REMOVE_TEMPORARY_MARKER = 'events-map/events/REMOVE_TEMPORARY_MARKER'
export const REMOVE_MARKERS_DATA = 'events-map/events/REMOVE_MARKERS_DATA'
export const REMOVE_EVENT_MARKER = 'events-map/events/REMOVE_EVENT_MARKER'

export const saveNewMarker = payload => ({
  type: SAVE_NEW_MARKER,
  payload,
})

export const changeMarkerPopup = payload => ({
  type: CHANGE_MARKER_POPUP,
  payload,
})

export const getMarkersRequest = () => ({ type: GET_MARKERS_REQUEST })

export const saveMarkersData = payload => ({
  type: SAVE_MARKERS_DATA,
  payload,
})

export const changeTemporaryMarker = payload => ({
  type: CHANGE_TEMPORARY_MARKER,
  payload,
})

export const removeTemporaryMarker = () => ({
  type: REMOVE_TEMPORARY_MARKER,
})

export const removeMarkersData = () => ({ type: REMOVE_MARKERS_DATA })
