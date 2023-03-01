import React from 'react'

export const MyList = props => {
	return (
		<section>
			<h1>{props.title}</h1>
			<ul>{props.children}</ul>
		</section>
	)
}
