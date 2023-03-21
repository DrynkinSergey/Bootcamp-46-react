import { ADD_TODO, FILTER, REMOVE_TODO, TOOGLE } from './todoActions'

let id = 0
export const todoReducer = (
	state = {
		tasks: [],
		filter: 'all',
	},
	action
) => {
	switch (action.type) {
		case ADD_TODO: {
			++id
			return {
				...state,
				tasks: [
					...state.tasks,
					{ id, title: action.payload, completed: false },
				],
			}
		}
		case REMOVE_TODO: {
			return {
				...state,
				tasks: state.tasks.filter(todo => todo.id !== action.payload),
			}
		}
		case TOOGLE: {
			return {
				...state,
				tasks: state.tasks.map(task =>
					task.id === action.payload
						? { ...task, completed: !task.completed }
						: task
				),
			}
		}
		case FILTER: {
			return {
				...state,
				filter: action.payload,
			}
		}
		default: {
			return state
		}
	}
}
