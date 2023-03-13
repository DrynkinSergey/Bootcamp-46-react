import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Counter } from './pages/Counter'
import { LoginForm } from './pages/LoginForm'
import { TodoList } from './pages/TodoList'
import { ImageFounder } from './pages/ImageFounder'
import { ColorPicker } from './pages/ColorPicker'
import { NavBar } from './components/NavBar/NavBar'
import { Vote } from './pages/Vote'
export const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<hr />
			<Routes>
				<Route index element={<ColorPicker />} />
				<Route path='counter' element={<Counter />} />
				<Route path='imageFounder' element={<ImageFounder />} />
				<Route path='colorPicker' element={<ColorPicker />} />
				<Route path='login' element={<LoginForm />} />
				<Route path='todoList' element={<TodoList />} />
				<Route path='vote' element={<Vote />} />
			</Routes>
		</BrowserRouter>
	)
}
