const SET_ERROR = 'event-map/error/SET_ERROR'

const initialState = {
  error: {},
  isError: false,
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return {
        ...state, error: { ...action.payload }, isError: true,
      }
    }
    default:
      return state
  }
}

export const setError = payload => ({ type: SET_ERROR, payload })

export default errorReducer
