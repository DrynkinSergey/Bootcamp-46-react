import { Component, useState } from 'react'
import { ControlledButtons } from './ControlledButtons'
import { Flex } from './../../components/Flex.styled'

export const Counter = ({ defaultCount, title }) => {
	return (
		<>
			<div className='mb-5 p-5 text-white bg-dark rounded-3 w-100'>
				<h2 className='text-center'>{title}</h2>
				<p className='text-center my-5' style={{ fontSize: 80 }}>
					{0}
				</p>
			</div>
			<div className='btns'>
				<button
					onClick={() => {}}
					className='btn p-3 btn-outline-light w-100 mx-2'
					type='button'
				>
					+
				</button>
				<button
					onClick={() => {}}
					className='btn p-3 btn-outline-light w-100 mx-2'
					type='button'
				>
					-
				</button>
				<button
					onClick={() => {}}
					className='btn p-3 btn-outline-light w-100 mx-2'
					type='button'
				>
					reset
				</button>
			</div>
		</>
	)
}

// export class Counter extends Component {
// 	static defaultProps = {
// 		defaultCount: 10,
// 		title: 'Counter',
// 	}

// 	state = {
// 		count: this.props.defaultCount,
// 	}

// 	increment = () => {
// 		// this.setState({ count: this.state.count + 1 })
// 		this.setState(prevState => ({
// 			count: prevState.count + 1,
// 		}))
// 	}
// 	decrement = () => {
// 		// this.setState({ count: this.state.count - 1 })
// 		this.setState(prevState => ({
// 			count: prevState.count - 1,
// 		}))
// 	}

// 	reset = () => {
// 		this.setState({ count: 0 })
// 	}

// 	render() {
// 		const { count } = this.state
// 		const { defaultCount, title } = this.props
// 		return (
// 			<Flex center>
// 				<div className='mb-5 p-5 text-white bg-dark rounded-3 w-100'>
// 					<h2 className='text-center'>{title}</h2>
// 					<p className='text-center my-5' style={{ fontSize: 80 }}>
// 						{count}
// 					</p>

// 					<ControlledButtons
// 						onReset={this.reset}
// 						onPlusBtnClick={this.increment}
// 						onMinusBtnClick={this.decrement}
// 					/>
// 				</div>
// 			</Flex>
// 		)
// 	}
// }
