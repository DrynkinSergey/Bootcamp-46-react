import styled from 'styled-components'

export const BackgroundTheme = styled.div`
	display: grid;
	place-content: center;
	height: 100vh;
	transition: background-color 0.5s linear;
	background-color: ${props => props.bgColor};
`
export const ColorPalette = styled.div``
export const Color = styled.li`
	list-style: none;
	border: 3px solid black;
	padding: 10px 15px;
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		background-color: lightcyan;
	}
`
export const ColorsList = styled.ul`
	display: flex;
	gap: 10px;
`
