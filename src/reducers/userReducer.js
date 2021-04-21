import { SAVE_USER_DATA } from '../actions'

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
	default:
		return state
	}
}

export default userReducer
