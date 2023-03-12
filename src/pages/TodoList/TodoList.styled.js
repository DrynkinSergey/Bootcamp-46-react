import styled from 'styled-components'

export const Todo = styled.div`
	display: flex;
	gap: 10px;
	justify-content: space-between;
	margin-bottom: 20px;
	padding: 10px 25px;
	border: 1px solid;
	border-radius: 8px;
	align-items: center;
	font-size: 1.2rem;
	box-shadow: 5px 5px 3px 0 lightsteelblue;
	background-color: ${props => (props.isComplete ? 'lightcyan' : 'white')};
`
export const TodoTitle = styled.li`
	list-style: none;
`
export const Button = styled.button`
	background-color: none;
	border-radius: 8px;
	font-size: 0.7rem;

	padding: 5px 15px;
	outline: none;
	margin-right: 5px;
	transition: all 0.3s ease-in;
	&:hover {
		background-color: darkcyan;
		color: white;
	}
`
