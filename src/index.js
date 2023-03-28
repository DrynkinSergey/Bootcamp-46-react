import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { persistor, store } from './redux'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles.css'
import { PersistGate } from 'redux-persist/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<PersistGate loading={null} persistor={persistor}>
			<Provider store={store}>
				<App />
				<ToastContainer autoClose={3000} />
			</Provider>
		</PersistGate>
	</BrowserRouter>
)
