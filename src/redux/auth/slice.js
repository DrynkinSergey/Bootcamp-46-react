import { createSlice } from '@reduxjs/toolkit'
import { logIn, logOut, refreshUser, register } from './operations'

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isLoading: false,
	error: null,
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
			state.isLoading = false
		},
		[refreshUser.pending](state, action) {
			state.isLoading = true
			state.error = null
		},
		[refreshUser.rejected](state, action) {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const authReducer = authSlice.reducer
