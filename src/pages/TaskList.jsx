import { useSelector } from 'react-redux'
import { selectAllTasks } from '../redux/tasks/selectors'
import { Task } from './Task'

export const TaskList = () => {
	const tasks = useSelector(selectAllTasks)

	return (
		<ul className='py-4'>
			{tasks.length ? (
				tasks.map(({ id, text }) => (
					<li key={id}>
						<Task id={id} text={text} />
					</li>
				))
			) : (
				<h1>Empty</h1>
			)}
		</ul>
	)
}
