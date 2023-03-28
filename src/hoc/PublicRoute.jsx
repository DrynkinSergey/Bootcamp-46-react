import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../redux/auth/selectors'
import { Navigate, useLocation } from 'react-router-dom'
export const PublicRoute = ({ children }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const location = useLocation()
	const fromPage = location.state?.from.pathname || '/'
	console.log(location)
	if (isLoggedIn) {
		return <Navigate to={fromPage} />
		// return <Navigate to='/' /> для домашки
		// це буде в мене після мержу
	}
	return children
}
