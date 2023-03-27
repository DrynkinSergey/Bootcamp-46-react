import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
	const isLoggedIn = useSelector(state => state.isLoggedIn)
	const user = useSelector(state => state.user.name)
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
				<h1>Welcome, {user}</h1>
				<button className='border'>LogOut</button>
			</div>
		</header>
	)
}
