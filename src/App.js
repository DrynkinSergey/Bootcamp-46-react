import { MyList } from './components/MyList/MyList'
import { MyListWithoutChildren } from './components/MyListWC/MyListWithoutChildren'
import { friendsData, moviesData, skillsData } from './data'
import styled from 'styled-components'

const ViewMyData = ({ data }) => {
	return data.map(item => <li key={item.id}>{item.name}</li>)
}

const App = () => {
	const Title = styled.h1`
		text-align: center;
		font-size: 4rem;
	`

	return (
		<div className='App'>
			<Title>components with children</Title>
			<MyList title='My friends'>
				<ViewMyData data={friendsData} />
			</MyList>
			<MyList title='My skills'>
				<ViewMyData data={skillsData} />
			</MyList>
			<MyList title='My favourite films'>
				<ViewMyData data={moviesData} />
			</MyList>

			<h1>Without children</h1>
			<MyListWithoutChildren title='My favourite friends' data={friendsData} />
		</div>
	)
}

export default App
