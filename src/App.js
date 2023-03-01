import { Panel } from './components/Panel'

const App = () => {
	const data2 = [
		{ id: 0, name: 'Sashko', age: 12 },
		{ id: 1, name: 'Sergii', age: 22 },
		{ id: 2, name: 'Olena', age: 31 },
		{ id: 3, name: 'Natali', age: 35 },
	]
	return (
		<div className='App'>
			<h1>Hello world</h1>
			<Panel items={data2} />
		</div>
	)
}

export default App
