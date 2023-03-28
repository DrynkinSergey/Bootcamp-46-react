import React from 'react'
import { selectIsLoggedIn } from '../redux/auth/selectors'
import { PrivateNav } from './PrivateNav'
import { useSelector } from 'react-redux'

import { PublicNav } from './PublicNav'

export const NavBar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)

	return (
		<header className='text-2xl text-white font-bold py-6 px-4 bg-cyan-600 flex justify-between gap-6'>
			{isLoggedIn ? <PrivateNav /> : <PublicNav />}
		</header>
	)
}
