import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Counter } from './pages/Counter'
import { TodoList } from './pages/TodoList'
import { NavBar } from './components/NavBar/NavBar'
import { useCallback } from 'react'

export const App = ({ value }) => {
	const a = useCallback(() => {
		console.log()
	}, [])
	// xd01xr0 - const a = () => {}
	// xd00xr1 - const a = () => {}

	return (
		<>
			<NavBar />
			<hr />
			<Routes>
				<Route path='/' element={<Counter functionA={a} />} />
				<Route path='todoList' element={<TodoList value={value} />} />
			</Routes>
		</>
	)
}
