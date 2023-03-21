import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './slices/counterSlice'
import { todoReducer } from './slices/todoSlice'

// const [state,dispatch] = useReducer(counterReducer, initialState)

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todoList: todoReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})
