import { Component, useEffect, useState } from 'react'
import { ControlledButtons } from './ControlledButtons'
import { Flex } from '../../components/Flex.styled'
import styled from 'styled-components'

let intervalId = null
export const Vote = () => {
	const [windowsValue, setWindowsValue] = useState(0)
	const [linuxValue, setLinuxValue] = useState(0)
	const [macOSValue, setMacOSValue] = useState(0)

	// set time and reset
	useEffect(() => {
		console.log('useEffect is mount')
		intervalId = setInterval(() => console.log(new Date()), 1000)

		return () => {
			console.log('useEffect is unmount')
			clearInterval(intervalId)
		}
	}, [])

	//

	useEffect(() => {
		console.log('useEffect windowsValue || linuxValue')
	}, [windowsValue, linuxValue])

	useEffect(() => {
		if (linuxValue > 10) {
			console.log('useEffect linuxValue > 10')
		}
	}, [linuxValue])

	const mapState = {
		windows: setWindowsValue,
		linux: setLinuxValue,
		macOS: setMacOSValue,
	}

	const vote = e => {
		const { name } = e.target
		// this.setState(prevState => ({
		// 	[e.target.name]: prevState[e.target.name] + 1,
		// }))
		// if (name === 'windows') {
		// 	setWindowsValue(prevState => prevState + 1)
		// }
		// if (name === 'linux') {
		// 	setLinuxValue(prevState => prevState + 1)
		// }
		// if (name === 'macOS') {
		// 	setMacOSValue(prevState => prevState + 1)
		// }
		mapState[name](prevState => prevState + 1)
	}
	return (
		<Flex center>
			<VoteContainer>
				<h2 className='text-center'>Vote</h2>
				<VoteResults>
					<h2>{linuxValue}</h2>
					<h2>{windowsValue}</h2>
					<h2>{macOSValue}</h2>
				</VoteResults>
				<ControlledButtons vote={vote} />
			</VoteContainer>
		</Flex>
	)
}
// export class Vote extends Component {
// 	state = {
// 		windows: 0,
// 		linux: 0,
// 		macOS: 0,
// 	}

// 	vote = e => {
// 		// this.setState({ count: this.state.count + 1 })
// 		this.setState(prevState => ({
// 			[e.target.name]: prevState[e.target.name] + 1,
// 		}))
// 	}

// 	render() {
// 		return (
// 			<Flex center>
// 				<VoteContainer>
// 					<h2 className='text-center'>Vote</h2>
// 					<VoteResults>
// 						<h2>{this.state.linux}</h2>
// 						<h2>{this.state.windows}</h2>
// 						<h2>{this.state.macOS}</h2>
// 					</VoteResults>
// 					<ControlledButtons vote={this.vote} />
// 				</VoteContainer>
// 			</Flex>
// 		)
// 	}
// }

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
