import { useDispatch } from 'react-redux'
import { deleteTask, fetchTasks } from '../redux/tasks/operations'

export const Task = ({ id, text }) => {
	const dispatch = useDispatch()
	const handleDelete = () => dispatch(deleteTask(id))

	return (
		<div className='bg-orange-300 py-4 rounded mb-4 px-8'>
			<p className='text-3xl mb-4'>{text}</p>
			<button
				className='border bg-red-500 p-1'
				type='button'
				onClick={handleDelete}
			>
				Delete
			</button>
		</div>
	)
}
