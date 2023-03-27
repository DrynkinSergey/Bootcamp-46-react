import React, { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from './pages/Home'
import { SinglePost } from './pages/SinglePost'
import { Layout } from './components/Layout'
import { LoginPage } from './pages/LoginPage'
import { PrivateRoute } from './hoc/PrivateRoute'
import { RegistrationPage } from './pages/RegistrationPage'

const Posts = lazy(() => import('./pages/Posts'))

export const App = () => {
	return (
		<div className='text-3xl font-bold italic'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='posts/' element={<Posts />} />
					<Route path='posts/:id' element={<SinglePost />} />

					<Route path='login' element={<LoginPage />} />
					<Route path='registration' element={<RegistrationPage />} />
					<Route path='about-us' element={<Navigate to='/about' />} />
				</Route>
			</Routes>
		</div>
	)
}
