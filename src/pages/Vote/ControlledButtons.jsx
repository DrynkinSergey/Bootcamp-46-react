import React, { useContext, useState } from 'react'
import { MyContext } from '../../App'

export const ControlledButtons = ({ vote, bgColor }) => {
	const context = useContext(MyContext)

	return (
		<div className='d-flex align-items-center justify-content-center w-100'>
			{context.btnsVote.map(btn => (
				<button
					key={btn.name}
					onClick={vote}
					className='btn p-3 btn-outline-light w-100 mx-2'
					type='button'
					name={btn.name}
				>
					{btn.title}
				</button>
			))}
		</div>
	)
}
