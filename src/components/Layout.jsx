import React, { Suspense, useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Context } from '../hoc/AuthProvider'
import { NavBar } from './NavBar'

export const Layout = () => {
	const navigate = useNavigate()
	const { logout, user } = useContext(Context)
	return (
		<>
			<NavBar />
			<main className='text-xl font-normal px-4'>
				{!user ? (
					<button
						className='border bg-cyan-300 py-2 px-4'
						onClick={() => navigate('/login')}
					>
						Login
					</button>
				) : (
					<button
						className='border bg-cyan-300 py-2 px-4'
						onClick={() => logout(() => navigate('/'))}
					>
						Logout
					</button>
				)}

				<div className='flex gap-2'>
					<button
						className='border bg-cyan-300 py-2 px-4'
						onClick={() => navigate(-1)}
					>
						GoBack
					</button>
					<button
						className='border bg-cyan-300 py-2 px-4'
						onClick={() => navigate(+1)}
					>
						GoNext
					</button>
				</div>
				<Suspense fallback={<h1>Loading</h1>}>
					<Outlet />
				</Suspense>
			</main>
		</>
	)
}
