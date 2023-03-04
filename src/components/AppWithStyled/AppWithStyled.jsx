import React from 'react'
import { Flex } from '../../StyledComponents/Flex'
import { Container } from '../../StyledComponents/StyledComponents'
import { CardList } from '../CardList/CardList'
import { Header } from '../Header'

export const AppWithStyled = () => {
	return (
		<>
			<Header color='white' bgColor='green'>
				Це буде наш додаток з картками
			</Header>
			<Container>
				<Flex justify='space-between'>
					<CardList />
				</Flex>
			</Container>
		</>
	)
}
