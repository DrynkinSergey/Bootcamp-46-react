import { createSlice } from '@reduxjs/toolkit'
import { createTask, fetchTasks, removeTask, toggleTask } from './thunks'

const todoSlice = createSlice({
	name: 'todoList',
	initialState: {
		tasks: [],
		filter: 'all',
		error: null,
		loading: false,
		theme: 'light',
	},
	reducers: {
		changeFilter(state, action) {
			state.filter = action.payload
		},
		test(state, action) {
			state.test = !state.test
		},
		toggleTheme(state, action) {
			state.theme =
				state.theme === 'light'
					? (state.theme = 'dark')
					: (state.theme = 'light')
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTasks.fulfilled, (state, action) => {
				state.tasks = action.payload
			})
			.addCase(createTask.fulfilled, (state, action) => {
				state.tasks.push(action.payload)
			})
			.addCase(removeTask.fulfilled, (state, action) => {
				const itemIndex = state.tasks.findIndex(
					task => task.id === action.payload.id
				)
				state.tasks.splice(itemIndex, 1)
			})
			.addCase(toggleTask.fulfilled, (state, action) => {
				const item = state.tasks.find(task => task.id === action.payload.id)
				item.completed = !item.completed
			})
			.addMatcher(
				action => action.type.endsWith('/pending'),
				(state, action) => {
					state.loading = true
					state.error = null
				}
			)
			.addMatcher(
				action => action.type.endsWith('/rejected'),
				(state, action) => {
					state.loading = false
					state.error = action.payload
				}
			)
			.addMatcher(
				action => action.type.endsWith('/fulfilled'),
				(state, action) => {
					state.loading = false
					state.error = null
				}
			)
	},
})

export const todoReducer = todoSlice.reducer
export const { changeFilter, test, toggleTheme } = todoSlice.actions
