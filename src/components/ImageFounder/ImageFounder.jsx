import React, { Component } from 'react'

import { Image } from './Image'
import styled from 'styled-components'
import { HeaderImgFounder } from './HeaderImgFounder'
export class ImageFounder extends Component {
	render() {
		return (
			<>
				<HeaderImgFounder />
				<ImageContainer></ImageContainer>
			</>
		)
	}
}
const ImageContainer = styled.div`
	display: grid;
	padding: 20px 10px;
	gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
`
