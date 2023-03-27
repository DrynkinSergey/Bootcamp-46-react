import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOut } from '../redux/auth/operations'

export const NavBar = () => {
	const dispatch = useDispatch()
	const name = useSelector(state => state.auth.user.name)
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
				<h1>
					Welcome, <span className='text-black'>{name}</span>
				</h1>
				<button
					className='border px-2 bg-red-500'
					onClick={() => dispatch(logOut())}
				>
					LogOut
				</button>
			</div>
		</header>
	)
}
