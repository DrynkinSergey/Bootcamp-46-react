export const selectAllTodos = state => state.tasks
export const selectFilterValue = state => state.filter
export const selectLoadingValue = state => state.loading

export const applyFilters = state => {
	const filter = selectFilterValue(state)
	const tasks = selectAllTodos(state)
	console.log('rerender')

	switch (filter) {
		case 'all': {
			return tasks
		}
		case 'active': {
			return tasks.filter(task => !task.completed)
		}
		case 'completed': {
			return tasks.filter(task => task.completed)
		}
		default:
			return state
	}
}
