import React from 'react'

export const SearchForm = props => {
	const handleSubmit = e => {
		e.preventDefault()
		props.filterCity(e.target.query.value)
	}
	return (
		<form onSubmit={handleSubmit}>
			<h1>SearchForm</h1>
			<input type='text' name='query' />
			<button>Find</button>
		</form>
	)
}
