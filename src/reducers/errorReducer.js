import { SET_ERROR } from '../actions'

const initialState = {
	errorCode: '',
	errorMessage: '',
}

const errorReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_ERROR: {
		return {
			...state,
			errorCode: action.payload.code,
			errorMessage: action.payload.message,
		}
	}
	default:
		return state
	}
}

export default errorReducer
