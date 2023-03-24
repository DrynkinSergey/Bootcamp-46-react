import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://641ccf251a68dc9e4611ae9f.mockapi.io'

export const fetchCity = createAsyncThunk(
	'city/fetchCity',
	async (_, thunkApi) => {
		try {
			const response = await axios.get('/Movies')
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error.message)
		}
	}
)
export const fetchRemoveCity = createAsyncThunk(
	'city/fetchRemoveCity',
	async (id, thunkApi) => {
		try {
			await axios.delete(`/Movies/${id}`)
			return id
		} catch (error) {
			return thunkApi.rejectWithValue(error.message)
		}
	},
	{
		condition: (_, { getState }) => {
			const { loading } = getState().loading
			if (loading) {
				return false
			}
		},
	}
)
