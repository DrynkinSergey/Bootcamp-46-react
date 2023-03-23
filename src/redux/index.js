import { configureStore } from '@reduxjs/toolkit'
import { cityReducer } from './citySlice'

export const store = configureStore({
	reducer: cityReducer,
	devTools: process.env.NODE_ENV !== 'production',
})
