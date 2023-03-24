import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchTCity } from '../redux/operations'
import { selectAllCity } from '../redux/selectors'
import { AddForm } from './AddForm'
import { Card } from './Card'
export const Cities = () => {
	const [state, setState] = useState([])
	useEffect(() => {
		axios
			.get('https://641ccf251a68dc9e4611ae9f.mockapi.io/Movies')
			.then(res => setState(res.data))
	}, [])
	const handleDeleteCard = id => {
		setState(state.filter(city => city.id !== id))
	}
	const addCity = newCity => {
		console.log(newCity)
		setState([newCity, ...state])
	}
	return (
		<div>
			Cities
			<AddForm addCity={addCity} />
			<Wrapper>
				{state.map(city => (
					<Card {...city} deleteCard={handleDeleteCard} />
				))}
			</Wrapper>
		</div>
	)
}
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	gap: 20px;
`
