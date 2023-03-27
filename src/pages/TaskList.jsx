import { useSelector } from 'react-redux'
import { selectAllTasks } from '../redux/tasks/selectors'
import { Task } from './Task'

export const TaskList = () => {
	const tasks = useSelector(selectAllTasks)

	return (
		<ul>
			{tasks.map(({ id, text }) => (
				<li key={id}>
					<Task id={id} text={text} />
				</li>
			))}
		</ul>
	)
}
