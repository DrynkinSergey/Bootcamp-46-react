import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../redux/auth/operations'
import { selectIsLoggedIn, selectUser } from '../redux/auth/selectors'
export const PrivateNav = () => {
	const dispatch = useDispatch()
	const { name } = useSelector(selectUser)
	return (
		<>
			<div className='flex gap-4'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/posts'>Posts</NavLink>
				<NavLink to='/newTask'>New task</NavLink>
			</div>
			<div className='flex gap-4'>
				<h1>
					<span className='text-black'>{name}</span>
				</h1>
				<button
					className='border px-2 bg-red-500'
					onClick={() => dispatch(logOut())}
				>
					LogOut
				</button>
			</div>
		</>
	)
}
