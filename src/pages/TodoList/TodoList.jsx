import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Button, Todo, TodoTitle } from './TodoList.styled'
import { Flex } from './../../components/Flex.styled'

export const TodoList = () => {
	const [todos, setTodos] = useState([])

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
									onChange={() => {}}
									checked={item.completed}
								/>
								<TodoTitle>{item.title} </TodoTitle>
								<Button onClick={() => {}}>Delete</Button>
							</Todo>
						))
					) : (
						<h1>Даних немає</h1>
					)}
				</ul>
			</div>
		</Flex>
	)
}
