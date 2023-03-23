import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = 'https://641ccf251a68dc9e4611ae9f.mockapi.io'

export const fetchTCity = createAsyncThunk(
	'city/fetchTCity',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/Movies')
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const addCity = createAsyncThunk(
	'city/addCity',
	async (title, thunkAPI) => {
		try {
			const response = await axios.post('/Movies', {
				title,
				completed: false,
			})
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const removeCity = createAsyncThunk(
	'city/removeCity',
	async (id, thunkAPI) => {
		try {
			const response = await axios.delete(`/Movies/${id}`)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
