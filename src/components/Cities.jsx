import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchCity } from '../redux/operations'
import { getAllCities } from '../redux/selectors'
import { AddForm } from './AddForm'
import { Card } from './Card'
import { SearchForm } from './SearchForm'
export const Cities = () => {
	const [state, setState] = useState([])
	const [query, setQuery] = useState('')
	const cities = useSelector(getAllCities)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchCity())
	}, [dispatch])
	const handleDeleteCard = id => {
		setState(state.filter(city => city.id !== id))
	}

	const addCity = newCity => {
		setState([newCity, ...state])
	}
	const filterCity = query => {
		setQuery(query)
	}
	const filtered = cities.filter(item =>
		item.city.toLowerCase().includes(query.toLowerCase())
	)

	return (
		<Main>
			<Title>Cities</Title>
			<Flex>
				<AddForm addCity={addCity} />
				<SearchForm filterCity={filterCity} />
			</Flex>
			<Wrapper>
				{filtered.map(city => (
					<Card key={city.id} {...city} deleteCard={handleDeleteCard} />
				))}
			</Wrapper>
		</Main>
	)
}
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	gap: 20px;
	padding: 20px 20px;
`
const Flex = styled.div`
	display: flex;
	justify-content: space-between;
`
const Main = styled.section`
	max-width: 90%;
	margin: 0 auto;
`
const Title = styled.h1`
	color: lightcoral;
`
