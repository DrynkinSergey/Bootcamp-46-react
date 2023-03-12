import axios from 'axios'
import React from 'react'

import { Button, Todo, TodoTitle } from './TodoList.styled'
import { Flex } from './../../components/Flex.styled'

export class TodoList extends React.Component {
	state = {
		todos: [],
	}
	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos')
			.then(res => this.setState({ todos: res.data }))
	}
	handleInputChange = id => {
		const newArr = this.state.todos.map(item =>
			item.id === id ? (item = { ...item, completed: !item.completed }) : item
		)
		this.setState({ todos: newArr })
	}
	handleDelete = id => {
		this.setState(prevState => ({
			todos: prevState.todos.filter(todo => todo.id !== id),
		}))
	}

	clear = () => {
		this.setState({ todos: [] })
	}

	addTodo = () => {
		const newTodo = {
			id: new Date().getTime(),
			title: 'Нове бажання',
			completed: false,
		}
		this.setState({
			todos: [...this.state.todos, newTodo],
		})
	}
	render() {
		const { todos } = this.state

		return (
			<Flex center>
				<div>
					<h2>Усього маємо записів: {todos.length}</h2>
					<h2>
						Усього виконаних речей:{' '}
						{todos.reduce(
							(total, currentItem) =>
								currentItem.completed ? total + 1 : total,
							0
						)}
					</h2>
					<ul>
						{todos.length ? (
							todos.map(item => (
								<Todo key={item.id} isComplete={item.completed}>
									<input
										type='checkbox'
										onChange={() => this.handleInputChange(item.id)}
										checked={item.completed}
									/>
									<TodoTitle>{item.title} </TodoTitle>
									<Button
										onClick={() => {
											this.handleDelete(item.id)
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
					<Button onClick={this.clear}>Clear todos</Button>
					<Button onClick={this.addTodo}>Add todo</Button>
				</div>
			</Flex>
		)
	}
}
