import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { persistor, store } from './redux'
import { Provider } from 'react-redux'

import './styles.css'
import { PersistGate } from 'redux-persist/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<PersistGate loading={null} persistor={persistor}>
			<Provider store={store}>
				<App />
			</Provider>
		</PersistGate>
	</BrowserRouter>
)
