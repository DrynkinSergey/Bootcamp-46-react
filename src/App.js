import { Component } from 'react'
import { ColorPicker } from './components/ColorPicker'
import { Counter } from './components/Counter'
import { Flex } from './components/Flex.styled'

import colorsJson from './assets/colors.json'

export class App extends Component {
	state = {
		todos: [
			{ id: 1, title: 'Вивчити Реакт', completed: true },
			{ id: 2, title: 'Вивчити Редакс', completed: false },
			{ id: 3, title: 'Вижити і знайти роботи', completed: true },
		],
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
		const newTodo = { id: 4, title: 'Нове бажання', completed: false }
		this.setState({
			todos: [...this.state.todos, newTodo],
		})
	}

	render() {
		const { todos } = this.state
		return (
			<>
				<ColorPicker colors={colorsJson} />
				<Flex center>
					<Counter />
				</Flex>
				<Flex>
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
									<div
										key={item.id}
										style={{
											backgroundColor: item.completed ? 'green' : 'white',
											display: 'flex',
											width: '400px',
											justifyContent: 'space-between',
											marginBottom: '20px',
											padding: 5,
											border: '1px solid ',
										}}
									>
										<li>{item.title} </li>
										<button
											onClick={() => {
												this.handleDelete(item.id)
											}}
										>
											Delete
										</button>
									</div>
								))
							) : (
								<h1>Даних немає</h1>
							)}
						</ul>
						<button onClick={this.clear}>Clear todos</button>
						<button onClick={this.addTodo}>Add todo</button>
					</div>
				</Flex>
			</>
		)
	}
}

// export const App2 = () => {
// 	return (
// 		<>
// 			<Flex center>
// 				<Counter />
// 			</Flex>
// 		</>
// 	)
// }
