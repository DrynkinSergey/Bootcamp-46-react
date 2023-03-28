import React, { lazy, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import { LoginPage } from './pages/LoginPage'
import { RegistrationPage } from './pages/RegistrationPage'
import { useDispatch } from 'react-redux'
import { refreshUser } from './redux/auth/operations'
import { PrivateRoute } from './hoc/PrivateRoute'
import { PublicRoute } from './hoc/PublicRoute'
import { Private } from './pages/Private'
import { selectIsRefreshing } from './redux/auth/selectors'

const Posts = lazy(() => import('./pages/Posts'))

export const App = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectIsRefreshing)
	useEffect(() => {
		dispatch(refreshUser())
	}, [dispatch])
	return isLoading ? (
		<div
			style={{
				display: 'grid',
				placeContent: 'center',
				height: '100vh',
				backgroundColor: 'lightcyan',
			}}
		>
			<h1>Loading...</h1>
		</div>
	) : (
		<div className='text-3xl font-bold italic'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path='posts/'
						element={
							<PrivateRoute>
								<Posts />
							</PrivateRoute>
						}
					/>
					<Route
						path='private'
						element={
							<PrivateRoute>
								<Private />
							</PrivateRoute>
						}
					/>
					<Route
						path='login'
						element={
							<PublicRoute>
								<LoginPage />
							</PublicRoute>
						}
					/>
					<Route
						path='registration'
						element={
							<PublicRoute>
								<RegistrationPage />
							</PublicRoute>
						}
					/>
				</Route>
			</Routes>
		</div>
	)
}
