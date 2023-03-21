import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './slices/todoSlice'

// const [state,dispatch] = useReducer(counterReducer, initialState)

export const store = configureStore({
	reducer: todoReducer,
	devTools: process.env.NODE_ENV !== 'production',
})
