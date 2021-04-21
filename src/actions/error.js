export const SET_ERROR = 'event-map/error/SET_ERROR'

export const setError = (code, message) => ({
	type: SET_ERROR,
	payload: { code, message },
})
