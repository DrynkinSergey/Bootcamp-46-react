import axios from 'axios'
import React, { useContext, useEffect, useReducer, useState } from 'react'

import { Button, Todo, TodoTitle } from './TodoList.styled'
import { Flex } from './../../components/Flex.styled'
import { reducer } from '../../store/reducer'
import {
	CLEAR,
	DELETE,
	GET_TODOS,
	INCREMENT_PAGE,
	SET_COMPLETE,
} from '../../store/const'
import { initialState } from '../../store/state'
import { MyContext, MyContextForTODO } from '../..'
export const TodoList = () => {
	// const [todos, setTodos] = useState([])
	// const [page, setPage] = useState(1)
	const { TodoData, colors } = useContext(MyContext)
	// console.log(TodoData, colors)

	const [state, dispatch] = useReducer(reducer, initialState)
	const { todos, page } = state
	useEffect(() => {
		getTodos()
	}, [page])
	// Dumb Components - тупі компоненти
	const getTodos = () => {
		axios
			.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=15`)
			.then(res => dispatch({ type: GET_TODOS, payload: res.data }))
	}
	const handleInputChange = id => {
		dispatch({ type: SET_COMPLETE, payload: id })
	}

	const clear = () => {
		dispatch({ type: CLEAR })
	}
	const handleDelete = id => {
		dispatch({ type: DELETE, payload: id })
	}

	const loadTodos = () => {
		// setPage(prevState => prevState + 1)
		dispatch({ type: INCREMENT_PAGE })
	}
	return (
		<Flex center>
			<div style={{ padding: '100px 0' }}>
				<h1>Велью з контексту: {TodoData.name}</h1>
				<h2>Усього маємо записів: {todos.length}</h2>
				<h2>
					Усього виконаних речей:
					{todos.reduce(
						(total, currentItem) => (currentItem.completed ? total + 1 : total),
						0
					)}
				</h2>
				<ul>
					{todos.length ? (
						todos.map(item => (
							<Todo key={item.id} isComplete={item.completed}>
								<input
									type='checkbox'
									onChange={() => handleInputChange(item.id)}
									checked={item.completed}
								/>
								<TodoTitle>{item.title} </TodoTitle>
								<Button
									onClick={() => {
										handleDelete(item.id)
									}}
								>
									Delete
								</Button>
							</Todo>
						))
					) : (
						<h1>Даних немає</h1>
					)}
				</ul>
				<Button onClick={clear}>Clear todos</Button>
				<Button onClick={loadTodos}>Load more</Button>
			</div>
		</Flex>
	)
}
