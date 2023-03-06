import styled, { css } from 'styled-components'
export const Flex = styled.div`
	display: flex;
	padding: 5%;
	height: ${props => props.height || 'auto'};
	${props =>
		props.center &&
		css`
			justify-content: center;
			align-items: center;
		`}
`
