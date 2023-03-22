import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { addTodo, loadTodos, toggleTodo } from './slices/todoSlice'

axios.defaults.baseURL = 'http://localhost:3002'
//thunk
export const fetchTodos = () => async dispatch => {
	const response = await axios.get('/todos')
	dispatch(loadTodos(response.data))
}

export const addNewTodo = title => async dispatch => {
	// dispatch(setLoading(true))
	const response = await axios.post('/todos', {
		title,
		completed: false,
	})
	dispatch(addTodo(response.data))
	// dispatch(setLoading(false))
}

export const toggleComplete = task => async dispatch => {
	const response = await axios.put(`/todos/${task.id}`, {
		...task,
		completed: !task.completed,
	})
	// console.log(response.data)
	dispatch(toggleTodo(response.data))
}
