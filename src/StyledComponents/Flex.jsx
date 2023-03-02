import React from 'react'
import styled from 'styled-components'

export const Flex = props => {
	const Flex = styled.div`
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		flex-direction: ${props => props.direction || 'row'};
		justify-content: ${props => props.justify || 'stretch'};
		align-items: ${props => props.align || 'stretch'}; ;
	`
	return <Flex {...props} />
}
