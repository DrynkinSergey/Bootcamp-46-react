import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
	return (
		<header className='text-4xl text-white font-bold py-6 px-4 bg-cyan-600 flex justify-center gap-6'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/posts'>Posts</NavLink>
			<NavLink to='/about'>About</NavLink>
		</header>
	)
}
