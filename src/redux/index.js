//https://www.npmjs.com/package/redux-logger
//https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
// import logger from 'redux-logger'
import {
	// combineReducers,
	configureStore,
	// getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { todoReducer } from './slices/todoSlice'
// import {
// 	persistStore,
// 	persistReducer,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const [state,dispatch] = useReducer(counterReducer, initialState)
// const persistConfig = {
// 	key: 'tasks',
// 	storage,
// 	blacklist: ['filter'],
// }
// для декількох редьюсерів свторюємо рутРедьюсер і передаємо до persistedReducer

// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	todolist: todoReducer,
// })

// const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
	reducer: todoReducer,
	devTools: process.env.NODE_ENV !== 'production',
})

// export const persistor = persistStore(store)
