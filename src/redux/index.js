import { configureStore } from '@reduxjs/toolkit'
import { cityReducer } from './slice'

export const store = configureStore({
	reducer: cityReducer,
})
