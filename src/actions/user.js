export const SET_USER_PROFILE = 'event-map/user/SET_USER_PROFILE'
export const SIGN_IN_EMAIL_REQUEST = 'event-map/user/SIGN_IN_EMAIL_REQUEST'
export const SIGN_IN_GOOGLE_REQUEST = 'event-map/user/SIGN_IN_GOOGLE_REQUEST'
export const SIGN_IN_VALIDATION = 'event-map/user/SIGN_IN_VALIDATION'
export const SIGN_OUT_REQUEST = 'event-map/user/SIGN_OUT_REQUEST'
export const REMOVE_USER_PROFILE = 'event-map/user/REMOVE_USER_PROFILE'

export const saveUserData = (email, password) => ({
  type: SET_USER_PROFILE,
  payload: { email, password },
})
export const removeUserData = () => ({
  type: REMOVE_USER_PROFILE,
})
export const signInEmailRequest = (email, password) => ({
  type: SIGN_IN_EMAIL_REQUEST,
  payload: { email, password },
})
export const signInGoogleRequest = () => ({ type: SIGN_IN_GOOGLE_REQUEST })
export const signOutAuth = () => ({ type: SIGN_OUT_REQUEST })
