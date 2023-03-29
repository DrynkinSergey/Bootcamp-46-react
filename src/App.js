import axios from 'axios'
import { useEffect, useState } from 'react'
import MediaCard from './components/MediaCard'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

export const App = () => {
	const [data, setData] = useState([])

	// useEffect(() => {
	// 	if (likes === 100) {
	//
	// 	}
	// }, [likes])

	useEffect(() => {
		axios
			.get(
				`https://pixabay.com/api/?key=34245251-6411f4167ae6b395d699c44eb&q=$animals&image_type=photo&per_page=12&page=${1}`
			)
			.then(res => setData(res.data.hits))
	}, [])
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}))
	return (
		<div>
			<header>Images</header>
			<Button variant='contained'>Contained</Button>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{Array.from(Array(6)).map((_, index) => (
					<Grid item xs={2} sm={4} md={4} key={index}>
						<MediaCard src={data[0].largeImageURL} />
					</Grid>
				))}
			</Grid>
		</div>
	)
}
