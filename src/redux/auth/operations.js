import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/'

// Utility to add JWT
// const setAuthHeader = token => {
// 	axios.defaults.headers.common.Authorization = `Bearer ${token}`
// }

// Utility to remove JWT
// const clearAuthHeader = () => {
// 	axios.defaults.headers.common.Authorization = ''
// }

/*
 * POST @ /users/signup
	// password with numbers
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
	'auth/register',
	async (credentials, thunkAPI) => {
		try {
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
	'auth/login',
	async (credentials, thunkAPI) => {
		try {
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
export const refreshUser = createAsyncThunk(
	'auth/refresh',
	async (_, thunkAPI) => {
		try {
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
