export const SAVE_USER_DATA = 'event-map/user/SAVE_USER_DATA'
export const SIGN_IN_EMAIL_REQUEST = 'event-map/user/SIGN_IN_EMAIL_REQUEST'
export const SIGN_IN_GOOGLE_REQUEST = 'event-map/user/SIGN_IN_GOOGLE_REQUEST'
export const saveUserData = payload => ({ type: SAVE_USER_DATA, payload })
export const signInByEmail = payload => ({ type: SIGN_IN_EMAIL_REQUEST, payload })
export const signInByGoogle = () => ({ type: SIGN_IN_GOOGLE_REQUEST })
