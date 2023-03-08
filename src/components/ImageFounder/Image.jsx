import React from 'react'
import styled from 'styled-components'

export const Image = ({imageURL}) => {

  return (
    <ImageItem src={imageURL} alt="img"/>
  )
}

const ImageItem = styled.img`
  width: 100%;
  overflow: hidden;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`