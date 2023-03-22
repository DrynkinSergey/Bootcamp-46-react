import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3002'

export const fetchTasks = createAsyncThunk(
	'tasks/fetchTasks',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/todos')
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
			const response = await axios.post('/todos', { title, completed: false })
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
			const response = await axios.delete(`/todos/${id}`)
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
			const response = await axios.put(`/todos/${task.id}`, {
				...task,
				completed: !task.completed,
			})
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
