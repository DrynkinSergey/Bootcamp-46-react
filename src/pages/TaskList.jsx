import { useSelector } from 'react-redux'
import { selectAllTasks } from '../redux/tasks/selectors'
import { Task } from './Task'
import { NavLink } from 'react-router-dom'
export const TaskList = () => {
	const tasks = useSelector(selectAllTasks)

	return (
		<ul className='py-4'>
			<div>
				<NavLink to='/newTask' className='border bg-yellow-700 py-4 px-4 '>
					Create new task
				</NavLink>
			</div>
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
