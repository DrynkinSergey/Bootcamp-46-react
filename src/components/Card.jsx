import React from 'react'

export const Card = ({ img, city, createdAt }) => {
	return (
		<div>
			<img src={img} alt='' />
			<h1>{city}</h1>
		</div>
	)
}
// "createdAt": "2023-03-23T09:41:38.313Z",
// "city": "New Cathryn",
// "img": "https://loremflickr.com/640/480/city",
// "id": "2"
