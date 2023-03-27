import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
	return (
		<header className='text-4xl text-white font-bold py-6 px-4 bg-cyan-600 flex justify-between gap-6'>
			<div className='flex gap-4'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/posts'>Posts</NavLink>
			</div>
			<div>
				<NavLink to='/login'>login</NavLink> |{' '}
				<NavLink to='/registration'>signUp</NavLink>
			</div>
		</header>
	)
}
