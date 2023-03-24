import React from 'react'
import styled from 'styled-components'
import { FcLike, FcDislike } from 'react-icons/fc'

export const Card = ({ img, city, createdAt, id, deleteCard }) => {
	const handleDelete = () => {
		deleteCard(id)
	}
	return (
		<CardItem>
			<div style={{ padding: '15px 20px' }}>
				<img src={img} alt='' />
				<Flex>
					<CardName>{city}</CardName>
					<div>
						<FcLike />
						<FcDislike />
					</div>
				</Flex>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</CardItem>
	)
}

const CardItem = styled.div`
	width: 100%;
	img {
		width: 100%;
	}
	box-shadow: rgba(0, 0, 0, 0.3) 2px 3px 10px 1px;
`
const CardName = styled.h1`
	font-size: 1.5rem;
`
const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
