import axios from 'axios'
import { Component } from 'react'
import { ImageFounder } from './components/ImageFounder'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export class App extends Component {
	render() {
		return (
			<>
				<ImageFounder />
				<ToastContainer success autoClose={3000} />
			</>
		)
	}
}
