import { useState } from 'react'
import { ControlledButtons } from './ControlledButtons'

export const Counter = ({ defaultCount, title }) => {
	const [count, setCount] = useState(0)

	function increment() {
		setCount(prevState => prevState + 1)
	}

	const decrement = () => {
		setCount(prevState => prevState - 1)
	}
	const reset = () => {
		setCount(0)
	}

	const handleClick = e => {
		const { name } = e.target
		// if (name === 'plus') {
		// 	setCount(prevState => prevState + 1)
		// }
		// if (name === 'minus') {
		// 	setCount(prevState => prevState - 1)
		// }
		// if (name === 'reset') {
		// 	setCount(0)
		// }
		console.log(name)
		switch (name) {
			case 'plus':
				setCount(prevState => prevState + 1)
				break
			case 'minus':
				setCount(prevState => prevState - 1)
				break
			case 'reset':
				setCount(0)
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

				<ControlledButtons
					handleClick={handleClick}
					onReset={reset}
					onPlusBtnClick={increment}
					onMinusBtnClick={decrement}
				/>
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
