import React from 'react'
import { NavLink } from 'react-router-dom'
export const PublicNav = () => {
	return (
		<>
			<div className='flex gap-4'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/posts'>Posts</NavLink>
			</div>
			<div>
				<NavLink to='/login'>login</NavLink> |{' '}
				<NavLink to='/registration'>signUp</NavLink>
			</div>
		</>
	)
}
