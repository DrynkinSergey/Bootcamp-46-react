import React from 'react'
import { useSelector } from 'react-redux'

export const Form = () => {
	const filter = useSelector(state => state.filters)
	return <div>Form and my filter : {filter}</div>
}
