import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './counterActions'

export const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENT: {
			return { ...state, count: state.count + state.step }
		}
		case DECREMENT: {
			return { ...state, count: state.count - state.step }
		}
		case RESET: {
			return { ...state, count: 0, step: 1 }
		}
		case CHANGE_STEP: {
			return { ...state, step: action.payload }
		}
		default:
			return state
	}
}
