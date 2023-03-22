import 'react-toastify/dist/ReactToastify.css'
import { TodoList } from './pages/TodoList'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'

export const App = () => {
	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:3002/todos')
	// 		.then(data => console.log(data.data))
	// }, [])
	return (
		<Provider store={store}>
			{/* <PersistGate loading={null} persistor={persistor}> */}
			<TodoList />
			{/* </PersistGate> */}
		</Provider>
	)
}
