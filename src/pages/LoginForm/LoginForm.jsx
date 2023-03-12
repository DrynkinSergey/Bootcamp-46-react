import { Component } from 'react'

export class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		age: '',
		gender: '',
		likes: '',
	}
	validate = () => {
		return this.state === '' || this.state.password === ''
	}
	handleChange = event => {
		const { value, name } = event.target
		// event.target.value
		this.setState({
			[name]: value,
			// email: event.target.value,
			// password: event.target.value,
		})
	}

	reset = () => {
		this.setState({
			email: '',
			password: '',
		})
	}
	handleSubmit = event => {
		event.preventDefault()

		console.log(this.state)
		// event.currentTarget.reset()
		this.reset()

		// const form = event.currentTarget
		// const email = form.elements.email.value
		// const password = form.elements.password.value
		// form.reset()
		// console.log(`Email: ${email} password: ${password}`)
	}
	render() {
		return (
			<form
				onSubmit={this.handleSubmit}
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
							onChange={this.handleChange}
							value={this.state.email}
						/>
						<label htmlFor='email'>Email address</label>
					</div>
					<div className='form-floating'>
						<input
							id='email'
							type='text'
							name='age'
							className='form-control'
							placeholder='name@example.com'
							onChange={this.handleChange}
							value={this.state.age}
						/>
						<label htmlFor='email'> age</label>
					</div>
					<div className='form-floating'>
						<input
							id='email'
							type='text'
							name='gender'
							className='form-control'
							placeholder='name@example.com'
							onChange={this.handleChange}
							value={this.state.gender}
						/>
						<label htmlFor='email'>gender</label>
					</div>
					<div className='form-floating'>
						<input
							id='email'
							type='text'
							name='likes'
							className='form-control'
							placeholder='name@example.com'
							onChange={this.handleChange}
							value={this.state.likes}
						/>
						<label htmlFor='email'>likes</label>
					</div>

					<div className='form-floating mt-4'>
						<input
							id='pass'
							name='password'
							type='text'
							className='form-control'
							placeholder='Password'
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<label htmlFor='pass'>Password</label>
					</div>

					<button
						disabled={this.validate()}
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
}
