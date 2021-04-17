import { SET_ERROR } from '../actions'

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

export default errorReducer
