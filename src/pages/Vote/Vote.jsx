import {
	Component,
	useContext,
	useEffect,
	useReducer,
	useRef,
	useState,
} from 'react'
import { ControlledButtons } from './ControlledButtons'
import { Flex } from '../../components/Flex.styled'
import styled from 'styled-components'

export const Vote = ({ bgColor }) => {
	const initialState = {
		windowsValue: 0,
		linuxValue: 22,
		macOSValue: 0,
		isActive: true,
		name: 'Alex',
	}

	const countReducer = (state, action) => {
		if (action.type)
			switch (action.type) {
				case 'windows':
					return { ...state, windowsValue: state.windowsValue + action.payload }
				case 'linux':
					return { ...state, linuxValue: state.linuxValue + action.payload }
				case 'macOS':
					return { ...state, macOSValue: state.macOSValue + action.payload }
				case 'clear':
					return { ...initialState }
				case 'changeName':
					return { ...state, name: action.payload }

				case 'default':
					return {
						windowsValue: 777,
						linuxValue: 222,
						macOSValue: 330,
					}
				case 'changeSatus':
					return { ...state, isActive: false }
				default:
					throw new Error(`this type is not support ${action.type}`)
			}
	}

	const [state, dispatch] = useReducer(countReducer, initialState)

	// const firstRender = useRef(true)
	// const intervalId = useRef(null)
	// const myRef = useRef()
	// const withoutRef = document.querySelector('.myH2')
	// const refValue = useRef(0)
	// // set time and reset
	// // useEffect(() => {
	// // 	console.log('useEffect is mount')
	// // 	intervalId.current = setInterval(() => console.log(new Date()), 1000)

	// // 	return () => {
	// // 		console.log('useEffect is unmount')
	// // 		clearInterval(intervalId.current)
	// // 	}
	// // }, [])

	// //
	// useEffect(() => {
	// 	if (firstRender.current) {
	// 		console.log('Перший рендер')
	// 		firstRender.current = false
	// 		return
	// 	}
	// })

	// useEffect(() => {
	// 	console.log('useEffect windowsValue || linuxValue')
	// }, [windowsValue, linuxValue])

	// useEffect(() => {
	// 	if (linuxValue > 10) {
	// 		console.log('useEffect linuxValue > 10')
	// 	}
	// }, [linuxValue])

	// const mapState = {
	// 	windows: setWindowsValue,
	// 	linux: setLinuxValue,
	// 	macOS: setMacOSValue,
	// }

	const vote = e => {
		const { name } = e.target
		dispatch({ type: 'windows' })

		// if (name === 'windows') {
		// 	// setWindowsValue(prevState => prevState + 1)
		// 	dispatch({ type: 'windows' })
		// }
		// if (name === 'linux') {
		// 	dispatch({ type: 'linux' })
		// }
		// if (name === 'macOS') {
		// 	dispatch({ type: 'macOS' })
		// }

		// mapState[name](prevState => prevState + 1)
	}
	return (
		<Flex center>
			<VoteContainer>
				<h2 className='text-center'>Vote</h2>
				<VoteResults>
					<h2 className='myH2'>{state.linuxValue}</h2>
					<h2>{state.windowsValue}</h2>
					<h2>{state.macOSValue}</h2>
				</VoteResults>
				{/* <ControlledButtons bgColor={bgColor} vote={vote} /> */}
				<button onClick={() => dispatch({ type: 'windows', payload: 4 })}>
					Windows
				</button>
				<button onClick={() => dispatch({ type: 'linux', payload: 2 })}>
					Linux
				</button>
				<button onClick={() => dispatch({ type: 'macOS', payload: 9 })}>
					MacOs
				</button>
				<button onClick={() => dispatch({ type: 'clear' })}>clear</button>
				<button onClick={() => dispatch({ type: 'default' })}>default</button>
				<button
					onClick={() =>
						dispatch({
							type: 'changeName',
							payload: 'this name is changed with useReducer',
						})
					}
				>
					changeName
				</button>
				<button onClick={() => dispatch({ type: 'changeSatus' })}>
					changeSatus
				</button>
			</VoteContainer>
		</Flex>
	)
}

const VoteContainer = styled.div`
	background-color: black;
	color: white;
	font-weight: bold;
	padding: 100px 20px;
	width: 100%;
	border-radius: 12px;
`
const VoteResults = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 100px;
`
// setVoteState(prevState => {
// 	return {
// 		...prevState,
// 		[name]:  prevState[name] + 1,,
// 	};
// });
