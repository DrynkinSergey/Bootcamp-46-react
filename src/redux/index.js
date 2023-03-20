import { createStore } from 'redux'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

export const initialState = {
	count: 0,
	step: 1,
}

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT: {
			return { ...state, count: state.count + state.step }
		}
		case DECREMENT: {
			return { ...state, count: state.count - state.step }
		}
		case RESET: {
			return initialState
		}
		default:
			return state
	}
}

export const store = createStore(
	counterReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//actions
export const increment = { type: INCREMENT }
export const decrement = { type: DECREMENT }
export const reset = { type: RESET }
