import { createStore } from 'redux'
import { rootReducer } from './rootReducer'

export const initialState = {
	counter: {
		count: 0,
		step: 1,
	},
	todoList: {
		tasks: [],
		filter: 'all',
	},
}

// const [state,dispatch] = useReducer(counterReducer, initialState)

export const store = createStore(
	rootReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
