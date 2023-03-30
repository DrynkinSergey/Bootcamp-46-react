import React from 'react'
import MediaQuery from 'react-responsive'
import { Doughnut } from 'react-chartjs-2'

import { Chart, ArcElement } from 'chart.js'
import styled from 'styled-components'
Chart.register(ArcElement)

export const Wallet = () => {
	// dispatch(addThunk(body)).unwrap().then(()=> dispatch(update)))
	const data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	}
	return (
		<div>
			Wallet
			<Diagram>
				<Doughnut
					width={1000}
					height={400}
					options={{ maintainAspectRatio: false }}
					data={data}
				/>
			</Diagram>
		</div>
	)
}
const Diagram = styled.div`
	width: 40vw;
`
