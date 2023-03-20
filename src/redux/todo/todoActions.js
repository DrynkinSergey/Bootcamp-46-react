export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOOGLE = 'TOOGLE'
export const FILTER = 'FILTER'

//actionCreator
export const addTodo = text => ({ type: ADD_TODO, payload: text })
export const removeTodo = id => ({
	type: REMOVE_TODO,
	payload: id,
})
export const setComplete = id => ({ type: TOOGLE, payload: id })
export const changeFilter = filter => ({ type: FILTER, payload: filter })
//action.payload
