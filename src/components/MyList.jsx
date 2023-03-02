import React from 'react'
import PropTypes from 'prop-types'

export const MyList = ({ title, children }) => {
	return (
		<section>
			<h1>{title}</h1>
			<ul>{children}</ul>
		</section>
	)
}
MyList.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
}
