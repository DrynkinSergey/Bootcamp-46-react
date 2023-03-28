import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/auth/selectors'
import { useSelector } from 'react-redux'
export const PrivateRoute = ({ children }) => {
	const location = useLocation()
	const isLoggedIn = useSelector(selectIsLoggedIn)
	if (!isLoggedIn) {
		return <Navigate to='/' state={{ from: location }} />
	}
	return children
	// Компонент вищого порядка - high order Component(HOC)
}
