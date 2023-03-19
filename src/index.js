import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './styles.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

export const MyContext = createContext(null)

const state = {
	counterData: { value2: 'Hello', text: 'OK' },
	TodoData: { name: 'ALex', work: true },
	colors: [
		{ name: 'ALex', work: true },
		{ name: 'ALex', work: true },
		{ name: 'ALex', work: true },
		{ name: 'ALex', work: true },
	],
}

root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<MyContext.Provider value={state}>
			<App value='Hello from props' />
		</MyContext.Provider>
	</BrowserRouter>

	// </React.StrictMode>
)
