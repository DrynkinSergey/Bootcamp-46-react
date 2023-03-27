import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOut } from '../redux/auth/operations'

export const NavBar = () => {
	const isLoggedIn = useSelector(state => state.isLoggedIn)
	const dispatch = useDispatch()
	const name = useSelector(state => state.auth.user.name)
	console.log(name)
	return (
		<header className='text-2xl text-white font-bold py-6 px-4 bg-cyan-600 flex justify-between gap-6'>
			<div className='flex gap-4'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/posts'>Posts</NavLink>
			</div>
			<div>
				<NavLink to='/login'>login</NavLink> |{' '}
				<NavLink to='/registration'>signUp</NavLink>
			</div>
			<div className='flex gap-4'>
				<h1>Welcome, {name}</h1>
				<button className='border' onClick={() => dispatch(logOut())}>
					LogOut
				</button>
			</div>
		</header>
	)
}
