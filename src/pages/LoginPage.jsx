import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logIn } from '../redux/auth/operations'
export const LoginPage = () => {
	const dispatch = useDispatch()
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value
		const password = form.password.value
		dispatch(logIn({ email, password }))
		form.reset()
	}
	return (
		<div>
			<h1>login</h1>
			<form className='flex gap-2 flex-col w-1/4 p-4' onSubmit={handleSubmit}>
				<input
					className='border'
					name='email'
					placeholder='email'
					type='text'
				/>
				<input
					className='border'
					name='password'
					placeholder='password'
					type='password'
				/>
				<button className='border'>Login</button>
			</form>
		</div>
	)
}
