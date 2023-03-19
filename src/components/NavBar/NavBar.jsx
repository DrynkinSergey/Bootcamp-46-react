import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineArrowUp } from 'react-icons/ai'
const pages = [
	{ title: 'Counter', url: '/counter' },
	{ title: 'TodoList', url: '/todoList' },
]

export const NavBar = () => {
	const [active, setActive] = useState(0)

	const setActiveHandler = id => {
		setActive(id)
	}
	return (
		<Navbar>
			<GoTop onClick={() => window.scrollTo(0, 0)}>
				<AiOutlineArrowUp />
			</GoTop>
			{pages.map((page, index) => (
				<NavLink key={page.title} to={page.url}>
					<Link
						active={active}
						index={index}
						onClick={() => setActiveHandler(index)}
					>
						{page.title}
					</Link>
				</NavLink>
			))}
		</Navbar>
	)
}

const Navbar = styled.nav`
	display: flex;
	justify-content: center;
	gap: 20px;
	padding: 10px 0;
`
const GoTop = styled.nav`
	position: fixed;
	bottom: 3%;
	background-color: white;
	right: 3%;
	border: 1px solid;
	padding: 5px 10px;
	border-radius: 8px;
	box-shadow: 2px 2px 2px 0 black;
	cursor: pointer;
`
const Link = styled.span`
	transition: all 0.3s linear;
	border-bottom: ${props =>
		props.active === props.index && '2px solid lightblue'};
	&:hover {
		color: blue;
	}
`
