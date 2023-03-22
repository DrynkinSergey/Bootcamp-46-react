import 'react-toastify/dist/ReactToastify.css'
import { TodoList } from './pages/TodoList'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux'
import { Provider } from 'react-redux'

export const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<TodoList />
			</PersistGate>
		</Provider>
	)
}
