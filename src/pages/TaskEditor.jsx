import { useDispatch } from 'react-redux'
import { addTask } from '../redux/tasks/operations'

export const TaskEditor = () => {
	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		const form = e.currentTarget
		const text = form.elements.text.value
		if (text !== '') {
			dispatch(addTask(text))
			form.reset()
			return
		}
		alert('Task cannot be empty. Enter some text!')
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
