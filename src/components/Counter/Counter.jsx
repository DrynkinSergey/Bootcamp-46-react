import { Component } from 'react'
import { ControlledButtons } from './ControlledButtons'

export class Counter extends Component {
	static defaultProps = {
		defaultCount: 10,
		title: 'Counter',
	}

	state = {
		count: this.props.defaultCount,
	}

	increment = () => {
		// this.setState({ count: this.state.count + 1 })
		this.setState(prevState => ({
			count: prevState.count + 1,
		}))
	}
	decrement = () => {
		// this.setState({ count: this.state.count - 1 })
		this.setState(prevState => ({
			count: prevState.count - 1,
		}))
	}

	reset = () => {
		this.setState({ count: 0 })
	}

	render() {
		const { count } = this.state
		const { defaultCount, title } = this.props
		return (
			<div className='mb-5 p-5 text-white bg-dark rounded-3 w-75'>
				<h2 className='text-center'>{title}</h2>
				<p className='text-center my-5' style={{ fontSize: 80 }}>
					{count}
				</p>

				<ControlledButtons
					onReset={this.reset}
					onPlusBtnClick={this.increment}
					onMinusBtnClick={this.decrement}
				/>
			</div>
		)
	}
}
