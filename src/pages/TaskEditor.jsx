import { useDispatch } from 'react-redux'
import { addTask } from '../redux/tasks/operations'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export const TaskEditor = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleSubmit = async e => {
		e.preventDefault()
		const form = e.currentTarget
		const text = form.elements.text.value
		if (text === '') {
			toast.error('Empty field!')
			return
		}
		try {
			await dispatch(addTask(text)).unwrap()
			navigate('/posts')
			toast.success('Task created!')
		} catch {
			toast.error('Error')
		}
		form.reset()
	}

	return (
		<form
			className='shadow-2xl mt-4 p-4 w-1/4 bg-indigo-300 flex justify-between'
			onSubmit={handleSubmit}
		>
			<input className='px-4' name='text' placeholder='enter your task here' />
			<button className='border rounded-md bg-white px-2'>Add task</button>
		</form>
	)
}
