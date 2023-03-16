import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Counter } from './pages/Counter'
import { TodoList } from './pages/TodoList'
import { NavBar } from './components/NavBar/NavBar'

export const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<hr />
			<Routes>
				<Route path='/' element={<Counter />} />
				<Route path='todoList' element={<TodoList />} />
			</Routes>
		</BrowserRouter>
	)
}
