import { Component, useState } from 'react'

export const LoginForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [age, setAge] = useState('')

	// const [formData, setFormData] = useState({
	// 	email: '',
	// 	password: '',
	// 	age: '',
	// })

	const mapState = {
		email: setEmail,
		password: setPassword,
		age: setAge,
	}

	const handleChange = event => {
		const { value, name } = event.target
		// this.setState({
		// 	[name]: value,
		// })=
		// switch (name) {
		// 	case 'email':
		// 		setEmail(value)
		// 		break
		// 	case 'password':
		// 		setPassword(value)
		// 		break
		// 	case 'age':
		// 		setAge(value)
		// 		break
		// 	default:
		// 		return
		// }
		mapState[name](value)
	}
	// const handleChange = event => {
	// 	const { value, name } = event.target

	// 	switch (name) {
	// 		case 'email':
	// 			setFormData(prevState => ({ ...prevState, email: value }))
	// 			this.setState(prevState => ({ ...prevState, email: value }))
	// 			break
	// 		case 'password':
	// 			setFormData(prevState => ({ ...prevState, password: value }))
	// 			break
	// 		case 'age':
	// 			setFormData(prevState => ({ ...prevState, age: value }))
	// 			break
	// 		default:
	// 			return
	// 	}
	// }
	const reset = () => {
		setAge('')
		setEmail('')
		setPassword('')
	}

	const handleSubmit = event => {
		event.preventDefault()

		// event.currentTarget.reset()
		reset()

		// const form = event.currentTarget
		// const email = form.elements.email.value
		// const password = form.elements.password.value
		// form.reset()
		// console.log(`Email: ${email} password: ${password}`)
	}
	return (
		<form
			onSubmit={handleSubmit}
			className='form-signin d-flex align-items-center justify-content-center mt-5'
		>
			<div className='d-block' style={{ width: 300, height: 'max-content' }}>
				<h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

				<div className='form-floating'>
					<input
						id='email'
						type='text'
						name='email'
						className='form-control'
						placeholder='name@example.com'
						onChange={handleChange}
						value={email}
					/>
					<label htmlFor='email'>Email address</label>
				</div>

				<div className='form-floating mt-4'>
					<input
						id='pass'
						name='password'
						type='text'
						className='form-control'
						placeholder='Password'
						value={password}
						onChange={handleChange}
					/>
					<label htmlFor='pass'>Password</label>
				</div>
				<div className='form-floating mt-4'>
					<input
						id='age'
						type='text'
						name='age'
						className='form-control'
						placeholder='name@example.com'
						onChange={handleChange}
						value={age}
					/>
					<label htmlFor='age'> age</label>
				</div>
				<button
					// disabled={this.validate()}
					type='submit'
					className='w-100 btn btn-lg btn-primary mt-4'
				>
					Sign in
				</button>

				<p className='mt-5 mb-3 text-muted'>© 2023</p>
			</div>
		</form>
	)
}

// export class LoginForm extends Component {
// 	state = {
// 		email: '',
// 		password: '',
// 		age: '',
// 	}
// 	validate = () => {
// 		return this.state === '' || this.state.password === ''
// 	}
// 	handleChange = event => {
// 		const { value, name } = event.target
// 		// event.target.value
// 		this.setState({
// 			[name]: value,
// 			// email: event.target.value,
// 			// password: event.target.value,
// 		})
// 	}

// 	reset = () => {
// 		this.setState({
// 			email: '',
// 			password: '',
// 			age: '',
// 		})
// 	}
// 	handleSubmit = event => {
// 		event.preventDefault()

// 		// event.currentTarget.reset()
// 		this.reset()

// 		// const form = event.currentTarget
// 		// const email = form.elements.email.value
// 		// const password = form.elements.password.value
// 		// form.reset()
// 		// console.log(`Email: ${email} password: ${password}`)
// 	}
// 	render() {
// 		return (
// 			<form
// 				onSubmit={this.handleSubmit}
// 				className='form-signin d-flex align-items-center justify-content-center mt-5'
// 			>
// 				<div className='d-block' style={{ width: 300, height: 'max-content' }}>
// 					<h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

// 					<div className='form-floating'>
// 						<input
// 							id='email'
// 							type='text'
// 							name='email'
// 							className='form-control'
// 							placeholder='name@example.com'
// 							onChange={this.handleChange}
// 							value={this.state.email}
// 						/>
// 						<label htmlFor='email'>Email address</label>
// 					</div>

// 					<div className='form-floating mt-4'>
// 						<input
// 							id='pass'
// 							name='password'
// 							type='text'
// 							className='form-control'
// 							placeholder='Password'
// 							value={this.state.password}
// 							onChange={this.handleChange}
// 						/>
// 						<label htmlFor='pass'>Password</label>
// 					</div>
// 					<div className='form-floating mt-4'>
// 						<input
// 							id='age'
// 							type='text'
// 							name='age'
// 							className='form-control'
// 							placeholder='name@example.com'
// 							onChange={this.handleChange}
// 							value={this.state.age}
// 						/>
// 						<label htmlFor='age'> age</label>
// 					</div>
// 					<button
// 						disabled={this.validate()}
// 						type='submit'
// 						className='w-100 btn btn-lg btn-primary mt-4'
// 					>
// 						Sign in
// 					</button>

// 					<p className='mt-5 mb-3 text-muted'>© 2023</p>
// 				</div>
// 			</form>
// 		)
// 	}
// }
