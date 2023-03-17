import { useEffect, useMemo, useReducer, useState } from 'react'
import { ControlledButtons } from './ControlledButtons'

import { useLocalStorage } from '../../hooks/useLocalStorage'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET = 'reset'

export const Counter = ({ defaultCount, title }) => {
	const [value, setValue] = useLocalStorage('COUNTER_KEY', 1)

	// const { isOpen, value, setClose, setOpen, toggle } = useToggle()
	//useMEMO
	// const data = useMemo(
	// 	() => [
	// 		1, 2, 4, 633, 223, 231, 321, 3, 123, 123, 123, 13, 1231, 31, 313, 13, 12,
	// 		31, 231, 23, 123, 123, 1, 31, 3, 123,
	// 	],
	// 	[]
	// )

	// const myData = useMemo(() => {
	// 	console.log('Users is ready')
	// 	return users.map(item => item.name)
	// }, [])

	const initialState = { count: 0, name: 'alex', work: true }

	// const [value, setValue] = useState({ count: 0, name: 'alex', work: true })

	const reducer = (state, { type }) => {
		switch (type) {
			case INCREMENT:
				return { ...state, count: state.count + 1 }
			case DECREMENT:
				return { ...state, count: state.count - 1 }
			case RESET:
				return { ...state, count: 0 }
			default:
				throw new Error()
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState)

	const { count } = state
	const handleClick = e => {
		const { name } = e.target
		switch (name) {
			case 'plus':
				setValue(prevState => prevState + 1)
				break
			case 'minus':
				setValue(prevState => prevState - 1)
				break
			case 'reset':
				setValue(0)
				break
			default:
				return
		}
	}

	return (
		<>
			<div className='mb-5 p-5 text-white bg-dark rounded-3 w-100'>
				<h2 className='text-center'>{title}</h2>
				<p className='text-center my-5' style={{ fontSize: 80 }}>
					{count}
				</p>

				<ControlledButtons handleClick={handleClick} />
			</div>
			<button onClick={() => dispatch({ type: INCREMENT })}>INCREMENT</button>
			<button onClick={() => dispatch({ type: DECREMENT })}>DECREMENT</button>
			<button onClick={() => dispatch({ type: RESET })}>RESET</button> */
			{/* {isOpen && <h1>Is open from useToggle</h1>}
			{value} 
			
			{myData.map(item => (
				<li key={item}>{item}</li>
			))}
			{data.map(item => (
				<p>{item}</p>
			))} */}
		</>
	)
}
