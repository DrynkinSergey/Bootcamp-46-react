import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Counter } from './pages/Counter'
import { LoginForm } from './pages/LoginForm'
import { TodoList } from './pages/TodoList'
import { ImageFounder } from './pages/ImageFounder'
import { ColorPicker } from './pages/ColorPicker'
import { NavBar } from './components/NavBar/NavBar'
import { Vote } from './pages/Vote'
import { createContext, useContext, useState } from 'react'

const context = {
	btnsVote: [
		{ title: 'LINUX', name: 'linux' },
		{ title: 'WINDOWS', name: 'windows' },
		{ title: 'MAC OS', name: 'macOS' },
	],
	btnsCounter: [
		{ title: 'dsaf', name: 'asdf' },
		{ title: 'WINDOWS', name: 'windows' },
		{ title: 'MAC OS', name: 'macOS' },
	],
	colorsData: [
		{
			id: 1,
			color: 'white',
		},
		{
			id: 2,
			color: 'lightblue',
		},
		{
			id: 3,
			color: 'orange',
		},
		{
			id: 4,
			color: 'tomato',
		},
		{
			id: 5,
			color: 'teal',
		},
		{
			id: 6,
			color: 'yellow',
		},
	],
	colorsTheme: {
		mainColor: 'blue',
		secondColor: 'red',
	},
}

export const MyContext = createContext(context)
export const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<hr />
			<MyContext.Provider value={context}>
				<Routes>
					<Route index element={<ColorPicker />} />
					<Route path='counter' element={<Counter />} />
					<Route path='imageFounder' element={<ImageFounder />} />
					<Route path='colorPicker' element={<ColorPicker />} />
					<Route path='login' element={<LoginForm />} />
					<Route path='todoList' element={<TodoList />} />
					<Route path='vote' element={<Vote />} />
				</Routes>
			</MyContext.Provider>
		</BrowserRouter>
	)
}
