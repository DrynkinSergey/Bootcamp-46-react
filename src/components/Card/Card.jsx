import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
export const Card = props => {
	const Card = styled.div`
		border: 2px solid;
		padding: 45px 15px;
		width: 25%;
		box-shadow: 2px 5px 5px 0px rgba(0, 0, 0, 0.75);
		transition: all 0.2s linear;
		&:hover {
			box-shadow: 0px 0px 5px 2px blue;
			cursor: pointer;
		}
		${props =>
			props.isOpenToWork &&
			css`
				background-color: lightcyan;
			`}
		${props =>
			!props.isOpenToWork &&
			css`
				background-color: lightsalmon;
			`}
	`
	return <Card {...props} />
}

Card.propTypes = {
	isOpenToWork: PropTypes.bool,
}
