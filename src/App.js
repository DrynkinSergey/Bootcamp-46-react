import { Component } from 'react'
import { TodoList } from './components/TodoList'
import { ImageFounder } from './components/ImageFounder'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export class App extends Component {
	render() {
		return (
			<>
				<ImageFounder />
				{/* <TodoList /> */}
				<ToastContainer success autoClose={3000} />
			</>
		)
	}
}
