export const applyFilters = (state, filter) => {
	switch (filter) {
		case 'all': {
			return state.todoList.tasks
		}
		case 'active': {
			return state.todoList.tasks.filter(task => !task.completed)
		}
		case 'completed': {
			return state.todoList.tasks.filter(task => task.completed)
		}
		default:
			return state
	}
}

export const allTakst = state => {
	return state.todoList.tasks
}
