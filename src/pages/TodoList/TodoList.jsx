import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Button, Todo, TodoTitle } from './TodoList.styled'
import { Flex } from './../../components/Flex.styled'

export const TodoList = () => {
	const [todos, setTodos] = useState([])
	const [page, setPage] = useState(1)

	useEffect(() => {
		getTodos()
	}, [page])

	const getTodos = () => {
		axios
			.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=15`)
			.then(res => setTodos(prevState => [...prevState, ...res.data]))
	}
	const handleInputChange = id => {
		const newArr = todos.map(item =>
			item.id === id ? (item = { ...item, completed: !item.completed }) : item
		)
		setTodos(newArr)
	}

	const clear = () => {
		setTodos([])
	}
	const handleDelete = id => {
		const arr = todos.filter(todo => todo.id !== id)
		setTodos(arr)
	}

	const loadTodos = () => {
		setPage(prevState => prevState + 1)
	}
	return (
		<Flex center>
			<div style={{ padding: '100px 0' }}>
				<h2>Усього маємо записів: {todos.length}</h2>
				<h2>
					Усього виконаних речей:{' '}
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
// export class TodoList extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			todos: [],
// 			page: 1,
// 		}
// 		this.myRef = React.createRef()

// 		this.observer = new IntersectionObserver(this.handleIntersection, {
// 			root: null,
// 			rootMargin: '-140px',
// 			threshold: 1.0,
// 		})
// 	}
// 	handleIntersection = entries => {
// 		entries.forEach(entry => {
// 			if (entry.isIntersecting) {
// 				this.loadTodos()
// 			} else {
// 				// console.log('Element is not intersecting with viewport')
// 			}
// 		})
// 	}

// 	getTodos = () => {
// 		axios
// 			.get(
// 				`https://jsonplaceholder.typicode.com/todos?_page=${this.state.page}&_limit=15`
// 			)
// 			.then(res =>
// 				this.setState(prevState => ({
// 					todos: [...prevState.todos, ...res.data],
// 				}))
// 			)
// 	}
// 	componentDidMount() {
// 		this.observer.observe(this.myRef.current)
// 		this.getTodos()
// 	}
// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevState.page !== this.state.page) {
// 			this.getTodos()
// 		}
// 	}
// 	componentWillUnmount() {
// 		this.observer.unobserve(this.myRef.current)
// 	}
// 	handleInputChange = id => {
// 		const newArr = this.state.todos.map(item =>
// 			item.id === id ? (item = { ...item, completed: !item.completed }) : item
// 		)
// 		this.setState({ todos: newArr })
// 	}
// 	handleDelete = id => {
// 		this.setState(prevState => ({
// 			todos: prevState.todos.filter(todo => todo.id !== id),
// 		}))
// 	}

// 	loadTodos = () => {
// 		this.setState(prevState => ({ page: prevState.page + 1 }))
// 	}

// 	clear = () => {
// 		this.setState({ todos: [] })
// 	}

// 	addTodo = () => {
// 		const newTodo = {
// 			id: new Date().getTime(),
// 			title: 'Нове бажання',
// 			completed: false,
// 		}
// 		this.setState({
// 			todos: [...this.state.todos, newTodo],
// 		})
// 	}
// 	render() {
// 		const { todos } = this.state

// 		return (
// 			<Flex center>
// 				<div style={{ padding: '100px 0' }}>
// 					<h2>Усього маємо записів: {todos.length}</h2>
// 					<h2>
// 						Усього виконаних речей:{' '}
// 						{todos.reduce(
// 							(total, currentItem) =>
// 								currentItem.completed ? total + 1 : total,
// 							0
// 						)}
// 					</h2>
// 					<ul>
// 						{todos.length ? (
// 							todos.map(item => (
// 								<Todo key={item.id} isComplete={item.completed}>
// 									<input
// 										type='checkbox'
// 										onChange={() => this.handleInputChange(item.id)}
// 										checked={item.completed}
// 									/>
// 									<TodoTitle>{item.title} </TodoTitle>
// 									<Button
// 										onClick={() => {
// 											this.handleDelete(item.id)
// 										}}
// 									>
// 										Delete
// 									</Button>
// 								</Todo>
// 							))
// 						) : (
// 							<h1>Даних немає</h1>
// 						)}
// 					</ul>
// 					<Button onClick={this.clear}>Clear todos</Button>
// 					<Button onClick={this.addTodo}>Add todo</Button>
// 					<Button
// 						style={{ visibility: 'hidden' }}
// 						ref={this.myRef}
// 						onClick={this.loadTodos}
// 					>
// 						Load more
// 					</Button>
// 				</div>
// 			</Flex>
// 		)
// 	}
// }
