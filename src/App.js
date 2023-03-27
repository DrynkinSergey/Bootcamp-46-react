import React, { lazy, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import { LoginPage } from './pages/LoginPage'
import { RegistrationPage } from './pages/RegistrationPage'
import { useDispatch } from 'react-redux'
import { refreshUser } from './redux/auth/operations'
import { PrivateRoute } from './hoc/PrivateRoute'
import { TaskEditor } from './pages/TaskEditor'

const Posts = lazy(() => import('./pages/Posts'))

export const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshUser())
	}, [dispatch])
	return (
		<div className='text-3xl font-bold italic'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='posts/' element={<Posts />} />
					<Route
						path='newTask'
						element={
							<PrivateRoute>
								<TaskEditor />
							</PrivateRoute>
						}
					/>
					<Route path='login' element={<LoginPage />} />
					<Route path='registration' element={<RegistrationPage />} />
				</Route>
			</Routes>
		</div>
	)
}
