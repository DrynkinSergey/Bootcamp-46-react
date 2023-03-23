import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = 'https://641c067f9b82ded29d5e2af7.mockapi.io'

export const fetchTasks = createAsyncThunk(
	'tasks/fetchTasks',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/contacts')
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const createTask = createAsyncThunk(
	'tasks/createTask',
	async (title, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', {
				title,
				completed: false,
			})
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const removeTask = createAsyncThunk(
	'tasks/removeTask',
	async (id, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${id}`)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
export const toggleTask = createAsyncThunk(
	'tasks/toggleTask',
	async (task, thunkAPI) => {
		try {
			const response = await axios.put(`/contacts/${task.id}`, {
				...task,
				completed: !task.completed,
			})
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
