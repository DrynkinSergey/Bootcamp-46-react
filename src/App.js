import { Header } from './components/Header'
import { Flex } from './StyledComponents/Flex'
import { Container } from './StyledComponents/StyledComponents'

import { CardList } from './components/CardList/CardList'
const App = () => {
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

export default App
