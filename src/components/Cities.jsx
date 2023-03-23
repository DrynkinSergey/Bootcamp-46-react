import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchTCity } from '../redux/operations'
import { selectAllCity } from '../redux/selectors'
import { Card } from './Card'
export const Cities = () => {
	const dispatch = useDispatch()
	const cities = useSelector(selectAllCity)
	useEffect(() => {
		dispatch(fetchTCity())
	}, [dispatch])

	return (
		<div>
			Cities
			<Wrapper>
				{cities.map(city => (
					<Card {...city} />
				))}
			</Wrapper>
		</div>
	)
}
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
	gap: 20px;
`
