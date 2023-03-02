import React from 'react'
import styled from 'styled-components'

export const Header = props => {
	const Header = styled.section`
		padding: 20px;
		font-size: 2rem;
		font-weight: bold;
		color: ${props => props.color || 'black'};
		background-color: ${props => props.bgColor || 'white'};
	`

	return <Header {...props} />
}
