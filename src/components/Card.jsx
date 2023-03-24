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
// "createdAt": "2023-03-23T09:41:38.313Z",
// "city": "New Cathryn",
// "img": "https://loremflickr.com/640/480/city",
// "id": "2"
const CardItem = styled.div`
	width: 100%;
	img {
		width: 100%;
	}
`
const CardName = styled.h1`
	font-size: 1.5rem;
`
