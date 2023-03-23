import { createSelector } from '@reduxjs/toolkit'

export const selectAllTodos = state => state.tasks
export const selectFilterValue = state => state.filter
export const selectLoadingValue = state => state.loading

export const applyFiltersWithoutReselect = state => {
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

export const applyFiltersReselect = createSelector(
	[selectAllTodos, selectFilterValue],
	// [ state => state.tasks, state => state.filter],
	(todos, filterstr) => {
		switch (filterstr) {
			case 'all': {
				return todos
			}
			case 'active': {
				return todos.filter(task => !task.completed)
			}
			case 'completed': {
				return todos.filter(task => task.completed)
			}
			default:
				console.log('error')
		}
	}
)
export const selectTestValue = createSelector([state => state.test], test => {
	console.log('Hello from reselect')
	return 2 + 2
})
