import { REMOVE_USER_PROFILE, SET_USER_PROFILE } from '../actions'

const initialState = {
  user: null,
  isAuthenticated: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state, user: { ...action.payload }, isAuthenticated: true,
      }
    }
    case REMOVE_USER_PROFILE: {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }
    }
    default:
      return state
  }
}

export default userReducer
