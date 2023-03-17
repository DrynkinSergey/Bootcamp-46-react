import { CLEAR, DELETE, GET_TODOS, INCREMENT_PAGE, SET_COMPLETE } from './const'

export const reducer = (state, action) => {
	switch (action.type) {
		case GET_TODOS:
			return { ...state, todos: [...state.todos, ...action.payload] }
		case SET_COMPLETE:
			return {
				...state,
				todos: state.todos.map(item =>
					item.id === action.payload
						? (item = { ...item, completed: !item.completed })
						: item
				),
			}
		case DELETE:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			}
		case CLEAR:
			return { ...state, todos: [] }

		case INCREMENT_PAGE:
			return { ...state, page: state.page + 1 }
		default:
			throw new Error()
	}
}
