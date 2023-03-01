import { MyList } from './components/MyList'
import { MyListWithoutChildren } from './components/MyListWithoutChildren'
import { friendsData, moviesData, skillsData } from './data'

const ViewMyData = ({ data }) => {
	return data.map(item => <li key={item.id}>{item.name}</li>)
}

const App = () => {
	return (
		<div className='App'>
			<h1>components with children</h1>
			<MyList title='My friends'>
				<ViewMyData data={friendsData} />
			</MyList>
			<hr />
			<MyList title='My skills'>
				<ViewMyData data={skillsData} />
			</MyList>
			<hr />
			<MyList title='My favourite films'>
				<ViewMyData data={moviesData} />
			</MyList>

			<h1>Without children</h1>
			<MyListWithoutChildren title='My favourite friends' data={friendsData} />
		</div>
	)
}

export default App
