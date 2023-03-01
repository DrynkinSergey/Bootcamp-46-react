import React from 'react'

export const MyListWithoutChildren = ({ title, data }) => {
	return (
		<section>
			<h1>{title}</h1>
			<ul>
				{data.map(item => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</section>
	)
}
