import React, { Component } from 'react'
import axios from 'axios'

import { Image } from './Image'
import styled from 'styled-components'
import { HeaderImgFounder } from './HeaderImgFounder'
export  class ImageFounder extends Component {
  state = {
		modalIsOpen: false,
		images: [],
	}
  handleOpenModel = () => {
		this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }))
	}

	componentDidMount() {
		axios
			.get(
				`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=yellow+flowers&image_type=photo`
			)
			.then(res => this.setState({ images: res.data.hits },console.log(this.state)))
	}
  render() {
    const {images} = this.state
    return (
      <>
      <HeaderImgFounder/>
      <ImageContainer>
      {images.map(image => <Image imageURL={image.largeImageURL}/>)}
      </ImageContainer>
      </>

    )
  }
}
const ImageContainer = styled.div`
  display: grid;
  padding: 20px 10px;
  gap:20px;
  grid-template-columns: repeat(auto-fill,minmax(500px, 1fr));
`