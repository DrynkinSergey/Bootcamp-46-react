import { createAction } from '@reduxjs/toolkit'

// 1 ЕТАП.........................
export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const reset = createAction('reset')
export const changeStep = createAction('changeStep')
//................................

//2 ЕТАП - заміна кейсів
export const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case increment.type: {
			return { ...state, count: state.count + state.step }
		}
		case decrement.type: {
			return { ...state, count: state.count - state.step }
		}
		case reset.type: {
			return { ...state, count: 0, step: 1 }
		}
		case changeStep.type: {
			return { ...state, step: action.payload }
		}
		default:
			return state
	}
}
