import { Button, Todo, TodoTitle } from './TodoList.styled'
import { Flex } from './../../components/Flex.styled'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, test } from '../../redux/slices/todoSlice'
import {
	applyFiltersReselect,
	applyFiltersWithoutReselect,
	selectFilterValue,
	selectLoadingValue,
	selectTestValue,
} from '../../redux/todoSelectors'
import { useEffect, useState } from 'react'
import {
	createTask,
	fetchTasks,
	removeTask,
	toggleTask,
} from '../../redux/slices/thunks'

export const TodoList = () => {
	const filter = useSelector(selectFilterValue)
	const loading = useSelector(selectLoadingValue)
	const filteredTasks = useSelector(applyFiltersWithoutReselect)
	const testValue = useSelector(selectTestValue)
	const dispatch = useDispatch()
	console.log(filteredTasks)
	const handleSubmit = event => {
		event.preventDefault()
		dispatch(createTask(event.target.title.value))
		event.target.reset()
	}
	useEffect(() => {
		dispatch(fetchTasks())
	}, [dispatch])
	return (
		<Flex center className='wrapper'>
			<button onClick={() => dispatch(test())}>TEST</button>
			<div style={{ padding: '100px 0' }}>
				<h2>ADD Todo:</h2>
				<h1>{testValue}</h1>
				<AddTodoForm onSubmit={handleSubmit}>
					<input type='text' name='title' />
					<button>Add</button>
				</AddTodoForm>
				<div style={{ padding: '15px 0', display: 'flex', gap: '10px' }}>
					<button
						///////////
						onClick={() => dispatch(changeFilter('all'))}
						///////////
						style={{ color: filter === 'all' ? 'red' : 'black' }}
					>
						All
					</button>
					<button
						///////////
						onClick={() => dispatch(changeFilter('active'))}
						//////////////
						style={{ color: filter === 'active' ? 'red' : 'black' }}
					>
						Active
					</button>
					<button
						//////////////
						onClick={() => dispatch(changeFilter('completed'))}
						////////////
						style={{ color: filter === 'completed' ? 'red' : 'black' }}
					>
						Completed
					</button>
				</div>
				{/* {loading && <h1>Loading...</h1>} */}
				{loading ? (
					<h1>loading</h1>
				) : (
					<ul>
						{filteredTasks.length ? (
							filteredTasks.map(item => (
								<Todo key={item.id} isComplete={item.completed}>
									<input
										type='checkbox'
										onChange={() => dispatch(toggleTask(item))}
										checked={item.completed}
									/>
									<TodoTitle>{item.title} </TodoTitle>
									<Button
										disabled={loading}
										onClick={() => dispatch(removeTask(item.id))}
									>
										Delete
									</Button>
								</Todo>
							))
						) : (
							<h1>Даних немає</h1>
						)}
					</ul>
				)}
			</div>
		</Flex>
	)
}

const AddTodoForm = styled.form`
	padding: 20px 0;
`
