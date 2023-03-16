import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Context } from './AuthProvider'

export const PrivateRoute = ({ children }) => {
	const location = useLocation()

	const { user } = useContext(Context)

	if (!user) {
		return <Navigate to='/login' state={{ from: location }} />
	}

	return children
	// Компонент вищого порядка - hight order Component(HOC)
}
