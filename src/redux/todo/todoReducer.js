import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const todoSlice = createSlice({
	name: '@@todoList',
	initialState: {
		tasks: [],
		filter: 'all',
	},
	reducers: {
		addTodo(state, action) {
			state.tasks.push({
				id: nanoid(),
				title: action.payload,
				completed: false,
			})
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

// ПОТІМ
// export const todoReducer = createReducer(
// 	{
// 		tasks: [],
// 		filter: 'all',
// 	}, //- initial state
// 	{
// 		// обробка кейсів .......................
// 		[addTodo]: (state, action) => {
// 			state.tasks.push({
// 				id: nanoid(),
// 				title: action.payload,
// 				completed: false,
// 			})
// 		},
// 		[removeTodo]: (state, action) => {

// 			const itemIndex = state.tasks.findIndex(
// 				task => task.id === action.payload
// 			)
// 			state.tasks.splice(itemIndex, 1)
// 		},

// 		[toggleTodo]: (state, action) => {

// 			const todo = state.tasks.find(task => task.id === action.payload)
// 			todo.completed = !todo.completed
// 		},
// 		[changeFilter]: (state, action) => {

// 			state.filter = action.payload
// 		},
// 	}
// )
//БУЛО
// export const todoReducer = (
// 	state = {
// 		tasks: [],
// 		filter: 'all',
// 	},
// 	action
// ) => {
// 	switch (action.type) {
// 		case ADD_TODO: {
// 			++id
// 			return {
// 				...state,
// 				tasks: [
// 					...state.tasks,
// 					{ id, title: action.payload, completed: false },
// 				],
// 			}
// 		}
// 		case REMOVE_TODO: {
// 			return {
// 				...state,
// 				tasks: state.tasks.filter(todo => todo.id !== action.payload),
// 			}
// 		}
// 		case TOOGLE: {
// 			return {
// 				...state,
// 				tasks: state.tasks.map(task =>
// 					task.id === action.payload
// 						? { ...task, completed: !task.completed }
// 						: task
// 				),
// 			}
// 		}
// 		case FILTER: {
// 			return {
// 				...state,
// 				filter: action.payload,
// 			}
// 		}
// 		default: {
// 			return state
// 		}
// 	}
// }
