import styled from 'styled-components'

export const BackgroundTheme = styled.div`
	display: grid;
	place-content: center;
	height: 95vh;
	font-size: calc(1vw + 1vh);
	transition: background-color 0.5s linear;
	background-color: ${props => props.bgColor};
`
export const ColorPalette = styled.div`
	text-align: center;
`
export const Color = styled.li`
	list-style: none;
	border: 3px solid black;
	padding: 10px 15px;
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.3s ease;
	background-color: ${props => props.bgItemColor};
	&:hover {
		background-color: lightcyan;
	}
`
export const ColorsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`
