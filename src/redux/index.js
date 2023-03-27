import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { authReducer } from './auth/slice'

export const store = configureStore({
	reducer: authReducer,
})
