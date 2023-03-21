export const applyFilters = (state, filter) => {
	switch (filter) {
		case 'all': {
			return state.tasks
		}
		case 'active': {
			return state.tasks.filter(task => !task.completed)
		}
		case 'completed': {
			return state.tasks.filter(task => task.completed)
		}
		default:
			return state
	}
}
