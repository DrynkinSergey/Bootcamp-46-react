export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'
export const CHANGE_STEP = 'CHANGE_STEP'

//actions
export const increment = { type: INCREMENT }
export const decrement = { type: DECREMENT }
export const reset = { type: RESET }
//actionCreator
export const changeStep = step => {
	return { type: CHANGE_STEP, payload: step }
}
