import { createSlice } from '@reduxjs/toolkit'
import { logIn, logOut, refreshUser, register } from './operations'

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.fulfilled](state, action) {
			// console.log(action.payload)
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLoggedIn = true
		},
		[logIn.fulfilled](state, action) {
			state.loading = false
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLoggedIn = true
		},
		[logOut.fulfilled](state) {
			state.user = { name: null, email: null }
			state.token = null
			state.isLoggedIn = false
		},
		[logIn.pending](state, action) {
			state.loading = true
		},
		[refreshUser.fulfilled](state, action) {
			state.user = action.payload
			state.isLoggedIn = true
			state.isRefreshing = false
		},
	},
})

export const authReducer = authSlice.reducer
