import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCity = createAsyncThunk(
	'city/fetchCity',
	async (_, thunkApi) => {
		try {
			const response = await axios.get(
				'https://641ccf251a68dc9e4611ae9f.mockapi.io/Movies'
			)
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error.message)
		}
	}
)
