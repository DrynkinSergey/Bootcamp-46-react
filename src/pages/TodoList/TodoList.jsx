import React, { useEffect, useState } from 'react'

import { Button, Todo, TodoTitle } from './TodoList.styled'
import { Flex } from './../../components/Flex.styled'
import styled from 'styled-components'

export const TodoList = () => {
	const [todos, setTodos] = useState([
		{ id: 1, title: 'Hello Redux', completed: false },
	])

	const handleSubmit = event => {
		event.preventDefault()
	}

	return (
		<Flex center>
			<div style={{ padding: '100px 0' }}>
				<h2>ADD Todo:</h2>
				<AddTodoForm onSubmit={handleSubmit}>
					<input type='text' name='title' />
					<button>Add</button>
				</AddTodoForm>
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

const AddTodoForm = styled.form`
	padding: 20px 0;
`
