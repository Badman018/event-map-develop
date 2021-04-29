export const SAVE_USER_DATA = 'event-map/user/SAVE_USER_DATA'
export const SIGN_IN_EMAIL_REQUEST = 'event-map/user/SIGN_IN_EMAIL_REQUEST'
export const SIGN_IN_GOOGLE_REQUEST = 'event-map/user/SIGN_IN_GOOGLE_REQUEST'
export const SIGN_IN_VALIDATION = 'event-map/user/SIGN_IN_VALIDATION'
export const SIGN_OUT_REQUEST = 'event-map/user/SIGN_OUT_REQUEST'

export const saveUserData = (email, password) => ({
  type: SAVE_USER_DATA,
  payload: { email, password },
})
export const signInEmailRequest = (email, password) => ({
  type: SIGN_IN_EMAIL_REQUEST,
  payload: { email, password },
})
export const signInGoogleRequest = () => ({ type: SIGN_IN_GOOGLE_REQUEST })
export const signOutAuth = () => ({ type: SIGN_OUT_REQUEST })
