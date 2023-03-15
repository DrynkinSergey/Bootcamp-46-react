import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'

export const Layout = () => {
	return (
		<>
			<NavBar />

			<main className='text-xl font-normal px-4'>
				<Outlet />
			</main>
		</>
	)
}
