import React from 'react'
import styled from 'styled-components'

export const MyList = props => {
	const Title = styled.h1`
		font-size: 3rem;
		color: green;
		text-align: center;
		text-decoration: underline;
		&:hover {
			cursor: pointer;
		}
	`
	const List = styled.ul`
		color: blue;
		list-style: none;
	`
	const Section = styled.section`
		max-width: 80vw;
		margin: 20px auto;
		padding: 30px;
		border: 3px solid;
		border-radius: 8px;
	`
	return (
		<Section>
			<Title>{props.title}</Title>
			<List>{props.children}</List>
		</Section>
	)
}
