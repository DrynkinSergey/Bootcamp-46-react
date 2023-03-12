import { Component } from 'react'
import { TodoList } from './components/TodoList'
// import { Counter } from './components/Counter'
import { ColorPicker } from './components/ColorPicker'
import { Flex } from './components/Flex.styled'
// import { ImageFounder } from './components/ImageFounder'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export class App extends Component {
	render() {
		return (
			<>
				<Flex center>
					<TodoList />
				</Flex>
				<ToastContainer success autoClose={3000} />
			</>
		)
	}
}
