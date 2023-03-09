import React from 'react'
import styled from 'styled-components'

export class HeaderImgFounder extends React.Component {
	render() {
		return (
			<Header>
				<SearchInput type='text' />
				<ButtonSearch>Find</ButtonSearch>
			</Header>
		)
	}
}

const Header = styled.form`
	padding: 20px;
	background-color: lightblue;
	display: flex;
	width: 100%;
	gap: 20px;
`
const SearchInput = styled.input`
	width: 70vw;
	padding: 5px 20px;
	border: none;
	border-radius: 8px;
	outline: none;
	box-shadow: 2px 2px 2px 0 black;
	font-size: 1.2rem;
`
const ButtonSearch = styled.button`
	padding: 5px 20px;
	border: none;
	border-radius: 8px;
	outline: none;
	box-shadow: 2px 2px 2px 0 black;
	&:hover {
		background-color: blue;
		color: white;
	}
`
