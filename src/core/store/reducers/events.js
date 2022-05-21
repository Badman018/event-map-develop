import { CHANGE_MARKER_POPUP, CHANGE_TEMPORARY_MARKER, REMOVE_EVENT_MARKER, REMOVE_MARKERS_DATA, REMOVE_TEMPORARY_MARKER, SAVE_MARKERS_DATA, SAVE_NEW_MARKER } from '../actions/events'

const initialState = {
  markers: [
    {
      id: 0,
      author: 'matvei@gmail.com',
      coords: [51.705, -0.09],
      description: 'NameConst',
      date: '2017-05-04T10:30',
      privacy: true,
      users: [],
      notifications: false,
    },
  ],
  temporaryMarker: {
    id: 0,
    author: '',
    coords: null,
    date: '',
    description: '',
    privacy: true,
    users: [],
    notifications: false,
  },
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NEW_MARKER: {
      return {
        ...state, markers: [...state.markers, action.payload],
      }
    }
    case SAVE_MARKERS_DATA: {
      return {
        ...state, markers: [...state.markers, ...action.payload],
      }
    }
    case CHANGE_MARKER_POPUP: {
      return {
        ...state,
        markers: state.markers.map(marker => {
          if (marker.id === action.payload.id) {
            return action.payload
          }
          return marker
        }),
      }
    }
    case CHANGE_TEMPORARY_MARKER: {
      return {
        ...state,
        temporaryMarker: action.payload,
      }
    }
    case REMOVE_TEMPORARY_MARKER: {
      return {
        ...state,
        temporaryMarker: {
          id: 0,
          author: '',
          coords: null,
          name: '',
          date: '',
          privacy: false,
          users: [],
          notifications: false,
        },
      }
    }
    case REMOVE_MARKERS_DATA: {
      return {
        ...state, markers: [],
      }
    }
    default:
      return state
  }
}

export default eventsReducer
