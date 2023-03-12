import { Component } from 'react'
import { ControlledButtons } from './ControlledButtons'
import { Flex } from '../../components/Flex.styled'
import styled from 'styled-components'
export class Vote extends Component {
	state = {
		windows: 0,
		linux: 0,
		macOS: 0,
	}

	vote = e => {
		// this.setState({ count: this.state.count + 1 })
		this.setState(prevState => ({
			[e.target.name]: prevState[e.target.name] + 1,
		}))
	}

	render() {
		return (
			<Flex center>
				<VoteContainer>
					<h2 className='text-center'>Vote</h2>
					<VoteResults>
						<h2>{this.state.linux}</h2>
						<h2>{this.state.windows}</h2>
						<h2>{this.state.macOS}</h2>
					</VoteResults>
					<ControlledButtons vote={this.vote} />
				</VoteContainer>
			</Flex>
		)
	}
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
