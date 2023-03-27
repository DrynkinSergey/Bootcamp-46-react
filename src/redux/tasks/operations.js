import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// GET @ /tasks
export const fetchTasks = createAsyncThunk(
	'tasks/fetchAll',
	async (_, thunkAPI) => {
		try {
			const res = await axios.get('/tasks')
			return res.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
// POST @ /tasks
export const addTask = createAsyncThunk()
// DELETE @ /tasks/:id
export const deleteTask = createAsyncThunk()
