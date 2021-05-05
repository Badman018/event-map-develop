import { REMOVE_USER_PROFILE, SET_USER_PROFILE } from '../actions'

const initialState = {
  userProfile: null,
  isAuthenticated: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state, userProfile: action.payload.email, isAuthenticated: true,
      }
    }
    case REMOVE_USER_PROFILE: {
      return {
        ...state,
        userProfile: null,
        isAuthenticated: false,
      }
    }
    default:
      return state
  }
}

export default userReducer
