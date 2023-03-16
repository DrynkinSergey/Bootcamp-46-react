import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledBtn = ({ title, path }) => {
	return <Button to={path}>{title}</Button>
}
const Button = styled(NavLink)`
	border: 1px solid;
	width: min-content;
	padding: 2px 12px;
	background-color: cyan;
`
