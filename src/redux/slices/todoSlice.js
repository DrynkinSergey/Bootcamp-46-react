import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const todoSlice = createSlice({
	name: '@@todoList',
	initialState: {
		tasks: [],
		filter: 'all',
	},
	reducers: {
		addTodo: {
			reducer: (state, action) => {
				state.tasks.push(action.payload)
			},

			prepare(title) {
				return {
					payload: {
						id: nanoid(),
						title,
						completed: false,
						createdAt: new Date().getFullYear(),
					},
				}
			},
		},

		removeTodo(state, action) {
			const itemIndex = state.tasks.findIndex(
				task => task.id === action.payload
			)
			state.tasks.splice(itemIndex, 1)
		},
		toggleTodo(state, action) {
			const todo = state.tasks.find(task => task.id === action.payload)
			todo.completed = !todo.completed
		},
		changeFilter(state, action) {
			state.filter = action.payload
		},
	},
})

export const todoReducer = todoSlice.reducer
export const { addTodo, toggleTodo, changeFilter, removeTodo } =
	todoSlice.actions
