import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../hoc/AuthProvider'

export const LoginPage = () => {
	const location = useLocation()
	console.log(location)
	const fromPage = location.state?.from?.pathname ?? '/'
	const navigate = useNavigate()
	const { login } = useContext(Context)
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const userName = form.userName.value
		if (userName !== '') {
			login(userName, () => navigate(fromPage))
		}
	}
	return (
		<div>
			<h1>login</h1>
			<form className='flex gap-2 flex-col w-1/4 p-4' onSubmit={handleSubmit}>
				<input className='border' name='userName' type='text' />
				<button className='border'>Login</button>
			</form>
		</div>
	)
}
