import React, { Component } from 'react'
import styled from 'styled-components'
import { ColorRing } from 'react-loader-spinner'
import getImages from './../../api/imageIPI'
import { Image } from './Image'
import { HeaderImgFounder } from './HeaderImgFounder'
const statusList = {
	loading: 'loading',
	success: 'success',
	error: 'error',
	reject: 'reject',
	idle: 'idle',
}
export class ImageFounder extends Component {
	state = {
		images: [],
		error: null,
		searchQuery: 'cars',
		// loading:true,
		status: statusList.idle,
	}

	// const status = [ 'loading', 'success', 'error', 'reject']

	handleSubmit = str => {
		this.setState({ searchQuery: str })
	}
	// handleChange = (e) => {
	// 	this.setState({ searchQuery: e.target.value })
	// }
	// handleClick = () => {
	// 	this.setState({ mustRender: true, loading: true })
	// 	setTimeout(() => {
	// 		axios
	// 			.get(
	// 				'https://pixabay.com/api/?key=34245251-6411f4167ae6b395d699c44eb&q=cars&image_type=photo'
	// 			)
	// 			.then(res => this.setState({ images: res.data.hits }))
	// 			.catch(error => this.setState({ error }))
	// 			.finally(this.setState({ loading: false }))
	// 	}, 1000)
	// }

	handleGetImages = () => {
		this.setState({ status: statusList.loading })
		getImages(this.state.searchQuery)
			.then(res =>
				this.setState({ images: res.data.hits, status: statusList.success })
			)
			.catch(error => this.setState({ error, status: statusList.error }))
	}

	componentDidMount() {
		this.handleGetImages()
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchQuery !== this.state.searchQuery) {
			this.handleGetImages()
		}
	}

	render() {
		const { images, status } = this.state
		if (status === statusList.loading) {
			return (
				<>
					<HeaderImgFounder onSubmit={this.handleSubmit} />
					<Preloader>
						<ColorRing
							visible={true}
							height='80'
							width='80'
							ariaLabel='blocks-loading'
							wrapperStyle={{}}
							wrapperClass='blocks-wrapper'
							colors={['#e15b64', '#ff3300', '#f8b26a', '#b3ff00', '#849b87']}
						/>
						<h1>Loading....</h1>
					</Preloader>
				</>
			)
		}
		if (status === statusList.success || status === statusList.idle) {
			return (
				<>
					<HeaderImgFounder onSubmit={this.handleSubmit} />
					<ImageContainer>
						{images.map(image => (
							<Image key={image.id} imageURL={image.largeImageURL} />
						))}
					</ImageContainer>
				</>
			)
		}
		if (status === statusList.error && status !== statusList.loading) {
			return <h1>Жодної картинки не знайдено, зробіть інший запит</h1>
		}
	}
}

// 	return (
// 		<>
// 			<HeaderImgFounder onSubmit={this.handleSubmit} />

// 			{loading && (
// 				<Preloader>
// 					<ColorRing
// 						visible={true}
// 						height='80'
// 						width='80'
// 						ariaLabel='blocks-loading'
// 						wrapperStyle={{}}
// 						wrapperClass='blocks-wrapper'
// 						colors={['#e15b64', '#ff3300', '#f8b26a', '#b3ff00', '#849b87']}
// 					/>
// 					<h1>Loading....</h1>
// 				</Preloader>
// 			)}
// 			{!loading && (
// 				<ImageContainer>
// 					{images.map(image => (
// 						<Image key={image.id} imageURL={image.largeImageURL} />
// 					))}
// 				</ImageContainer>
// 			)}

// 			{error ||
// 				(images.length === 0 && (
// 					<h1>Жодної картинки не знайдено, зробіть інший запит</h1>
// 				))}
// 		</>
// 	)
// }
// }

const ImageContainer = styled.div`
	display: grid;
	padding: 20px 15px;
	gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`
const Preloader = styled.div`
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
