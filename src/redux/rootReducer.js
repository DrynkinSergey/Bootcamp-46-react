import { combineReducers } from 'redux'
import { counterReducer } from './counter/counterReducer'
import { todoReducer } from './todo/todoReducer'

export const rootReducer = combineReducers({
	counter: counterReducer,
	todoList: todoReducer,
})
