import { REMOVE_USER_DATA, SAVE_USER_DATA } from '../actions'

const initialState = {
  user: {},
  isAuthed: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA: {
      return {
        ...state, user: { ...action.payload }, isAuthed: true,
      }
    }
    case REMOVE_USER_DATA: {
      return {
        user: {},
        isAuthed: false,
      }
    }
    default:
      return state
  }
}

export default userReducer
