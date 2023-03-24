import React from 'react'
import styled from 'styled-components'

export const Card = ({ img, city, createdAt, id, deleteCard }) => {
	const handleDelete = () => {
		deleteCard(id)
	}
	return (
		<CardItem>
			<img src={img} alt='' />
			<CardName>{city}</CardName>
			<button onClick={handleDelete}>Delete</button>
		</CardItem>
	)
}

const CardItem = styled.div`
	width: 100%;
	img {
		width: 100%;
	}
`
const CardName = styled.h1`
	font-size: 1.5rem;
`
