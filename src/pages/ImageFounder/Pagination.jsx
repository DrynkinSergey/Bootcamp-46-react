import React, { Children } from 'react'
import styled from 'styled-components'

export const Pagination = ({ onChangePage, totalItems, currentPage }) => {
	const pages = []
	const lastPage = totalItems
	for (let i = 1; i <= totalItems; i++) {
		if (i <= 20) {
			pages.push(i)
		}
	}

	return (
		<Pages>
			<button
				disabled={currentPage === 1}
				onClick={() => onChangePage(currentPage - 1)}
			>
				Prev
			</button>
			{pages.map((page, index) => (
				<Page
					key={index}
					currentPage={currentPage}
					onClick={() => onChangePage(index + 1)}
				>
					{page}
				</Page>
			))}
			...
			<Page currentPage={currentPage} onClick={() => onChangePage(lastPage)}>
				{lastPage}
			</Page>
			<button
				disabled={currentPage === 20}
				onClick={() => onChangePage(currentPage + 1)}
			>
				Next
			</button>
		</Pages>
	)
}

const Pages = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	font-size: 1.2rem;
	padding: 20px 0;
	overflow: hidden;
`
const Page = styled.span`
	background-color: ${props =>
		props.currentPage === props.children && 'lightblue'};
	cursor: pointer;
	border: 2px dashed lightblue;
	padding: 5px 10px;
	transition: all 0.1s ease;
	&:hover {
		scale: 1.2;
		background-color: #b8f8fa;
	}
`
