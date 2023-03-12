import React from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'
export class SearchForm extends React.Component {
	state = {
		searchString: '',
	}

	handleChangeInput = e => {
		this.setState({ searchString: e.currentTarget.value })
	}

	handleSubmit = e => {
		e.preventDefault()

		if (!this.state.searchString) {
			toast('Заповніть, будь ласка, ваш інпут!')
			return
		}
		this.props.onSubmit(this.state.searchString)
		this.setState({ searchString: '' })
	}

	render() {
		const { searchString } = this.state
		return (
			<Header onSubmit={this.handleSubmit}>
				<SearchInput
					onChange={this.handleChangeInput}
					value={searchString}
					type='text'
				/>
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
