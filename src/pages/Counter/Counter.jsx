import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../../redux'

export const Counter = ({ title }) => {
	const dispatch = useDispatch()
	const { count, step } = useSelector(state => state)

	const handleSubmit = event => {
		event.preventDefault()
	}
	return (
		<>
			<div className='mb-5 p-5 text-white bg-dark rounded-3 w-100'>
				<form onSubmit={handleSubmit}>
					<h2>Current step: {step}</h2>
					<input type='text' placeholder='You can change step...' />
					<Button>Set</Button>
				</form>
				<Count>{count}</Count>
			</div>
			<div className='btns'>
				<Button onClick={() => dispatch(increment)} type='button'>
					+
				</Button>
				<Button onClick={() => dispatch(decrement)} type='button'>
					-
				</Button>
				<Button onClick={() => dispatch(reset)} type='button'>
					reset
				</Button>
			</div>
		</>
	)
}

const Button = styled.button`
	padding: 8px 38px;
	cursor: pointer;
	color: white;
	background-color: #232323;
`
const Count = styled.div`
	font-size: 8rem;
	text-align: center;
	color: white;
`
