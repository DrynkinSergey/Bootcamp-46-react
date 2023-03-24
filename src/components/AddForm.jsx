import { nanoid } from '@reduxjs/toolkit'
import React from 'react'

export const AddForm = props => {
	const handleSubmit = e => {
		e.preventDefault()
		props.addCity({
			city: e.target.title.value,
			img: 'https://loremflickr.com/640/480/city',
			id: nanoid(),
		})
	}
	return (
		<form onSubmit={handleSubmit}>
			<h1>Add city</h1>
			<input type='text' name='title' />
			<button>Add</button>
		</form>
	)
}

// "city": "New Cathryn",
// "img": "https://loremflickr.com/640/480/city",
// "id": "2"
