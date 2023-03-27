import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../redux/tasks/operations'
import { selectLoading } from '../redux/tasks/selectors'
import { TaskEditor } from './TaskEditor'
import { TaskList } from './TaskList'

export default function Tasks() {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectLoading)

	useEffect(() => {
		dispatch(fetchTasks())
	}, [dispatch])

	return (
		<>
			<title>Your tasks</title>
			<div>{isLoading && 'Request in progress...'}</div>
			<TaskList />
		</>
	)
}
