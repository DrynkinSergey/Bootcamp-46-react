import { createSlice } from '@reduxjs/toolkit'
import { createTask, fetchTasks, removeTask, toggleTask } from './thunks'

const pending = (state, action) => {
	state.loading = true
	state.error = null
}
const rejected = (state, action) => {
	state.loading = false
	state.error = action.payload
}

const todoSlice = createSlice({
	name: '@@todoList',
	initialState: {
		tasks: [],
		filter: 'all',
		error: null,
		loading: false,
	},
	reducers: {
		changeFilter(state, action) {
			state.filter = action.payload
		},
	},
	extraReducers: {
		[fetchTasks.pending]: pending,
		[createTask.pending]: pending,
		[removeTask.pending]: pending,
		[toggleTask.pending]: pending,

		[fetchTasks.fulfilled]: (state, action) => {
			state.loading = false
			state.error = null
			state.tasks = action.payload
		},
		[createTask.fulfilled]: (state, action) => {
			state.loading = false
			state.error = null

			state.tasks.push(action.payload)
		},
		[removeTask.fulfilled]: (state, action) => {
			state.loading = false
			state.error = null

			const itemIndex = state.tasks.findIndex(
				task => task.id === action.payload.id
			)
			state.tasks.splice(itemIndex, 1)
		},
		[toggleTask.fulfilled]: (state, action) => {
			state.loading = false
			state.error = null

			const item = state.tasks.find(task => task.id === action.payload.id)
			item.completed = !item.completed
		},

		[fetchTasks.rejected]: rejected,
		[createTask.rejected]: rejected,
		[removeTask.rejected]: rejected,
		[toggleTask.rejected]: rejected,
	},
})

export const todoReducer = todoSlice.reducer
export const { changeFilter } = todoSlice.actions
