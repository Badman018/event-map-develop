const SAVE_USER_DATA = 'event-map/user/SAVE_USER_DATA'

const initialState = {
  user: {
    uid: '',
    email: '',
  },
  isAuthed: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA: {
      return {
        ...state, user: action.userData, isAuthed: true,
      }
    }
    default:
      return state
  }
}

export const saveUserData = payload => ({ type: SAVE_USER_DATA, payload })

export default userReducer
