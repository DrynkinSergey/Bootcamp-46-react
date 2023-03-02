import React from 'react'
import styled from 'styled-components'
import usersJson from '../../assets/users.json'
import { Card } from '../Card/Card'
export const CardList = () => {
	const Img = styled.img`
		width: 20%;
		margin: 0 auto;
		display: block;
		border-radius: 50%;
	`
	const Name = styled.h1`
		text-align: center;
		margin-bottom: 10px;
	`
	const Email = styled.h3`
		color: blue;
		margin-bottom: 10px;
	`
	const Bio = styled.h3`
		margin-bottom: 10px;
	`

	return usersJson.map(user => (
		<Card isOpenToWork={user.isOpenToWork}>
			<Img
				src={
					user.img ||
					'https://uybor.uz/borless/avtobor/img/user-images/user_no_photo_400x400.png'
				}
				alt='userImg'
			/>
			<Name>{user.name}</Name>
			<Email>{user.email}</Email>
			<Bio>{user.bio}</Bio>
			<h4>{user.isOpenToWork}</h4>
			<h4>
				<span>Skills: </span>
				{user.skills.map(skill => (
					<span style={{ fontWeight: 'bold' }}>{skill} </span>
				))}
			</h4>
		</Card>
	))
}
