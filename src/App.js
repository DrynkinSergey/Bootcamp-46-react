import { MyList } from './components/MyList'
import { MyListWithoutChildren } from './components/MyListWithoutChildren'
import { moviesData, friendsData, skillsData } from './data'
import PropTypes from 'prop-types'

// export const moviesData = [
// 	{ id: 1, name: 'Terminator' },
// 	{ id: 2, namee: 'Spider Man' },
// 	{ id: 3, name: 'Batman' },
// 	{ id: 4, name: 'Mr.Bin' },
// ]

const ViewMyData = ({ data }) => {
	return data.map((item, index) => <li key={item.id}>{item.name}</li>)
}

const App = () => {
	return (
		<div className='App'>
			<MyList title='My friends'>
				<ViewMyData data={friendsData} />
				<ViewMyData data={friendsData} />
			</MyList>

			<MyListWithoutChildren title={'Films'} data={moviesData} />
			<hr />
		</div>
	)
}

ViewMyData.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
		})
	),
}

export default App
