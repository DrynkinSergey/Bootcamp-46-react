import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { ColorRing } from 'react-loader-spinner'

import { Image } from './Image'
import { HeaderImgFounder } from './HeaderImgFounder'
export class ImageFounder extends Component {
	state = {
		images: [],
		loading: false,
	}
	componentDidMount() {
		this.setState({ loading: true })
		setTimeout(() => {
			axios
				.get(
					'https://pixabay.com/api/?key=34245251-6411f4167ae6b395d699c44eb&q=yellow+flowers&image_type=photo'
				)
				.then(res => this.setState({ images: res.data.hits }))
				.catch(error => console.log(error))
				.finally(this.setState({ loading: false }))
		}, 2000)
	}

	render() {
		const { images, loading } = this.state
		return (
			<>
				<HeaderImgFounder />
				{loading && (
					<Preloader>
						<ColorRing
							visible={true}
							height='80'
							width='80'
							ariaLabel='blocks-loading'
							wrapperStyle={{}}
							wrapperClass='blocks-wrapper'
							colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
						/>
						<h1>Loading....</h1>
					</Preloader>
				)}
				{!loading && (
					<ImageContainer>
						{images.map(image => (
							<Image key={image.id} imageURL={image.largeImageURL} />
						))}
					</ImageContainer>
				)}
			</>
		)
	}
}
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
