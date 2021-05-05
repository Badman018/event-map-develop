import { CHANGE_MARKER_POPUP, CHANGE_TEMPORARY_MARKER, REMOVE_MARKERS_DATA, REMOVE_TEMPORARY_MARKER, SAVE_MARKERS_DATA, SAVE_NEW_MARKER } from '../actions/events'

const initialState = {
  markers: [
    {
      id: 0,
      author: 'matvei@gmail.com',
      position: [51.705, -0.09],
      popup: {
        name: 'NameConst',
        date: '2017-05-04T10:30',
      },
      privacy: {
        isPublic: true,
        availabilityUsers: ['matvei@gmail.com'],
      },
      notifications: false,
    },
  ],
  temporaryMarker: {
    id: null,
    author: '',
    positon: null,
    popup: {
      name: '',
      date: '',
    },
    privacy: {
      isPublic: true,
      availabilityUsers: null,
    },
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
          id: null,
          author: '',
          position: null,
          popup: {
            name: '',
            date: '',
          },
          privacy: {
            isPublic: true,
            availabilityUsers: null,
          },
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
