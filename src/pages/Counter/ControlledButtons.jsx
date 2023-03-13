import React from 'react'

export const ControlledButtons = ({
	onPlusBtnClick,
	onMinusBtnClick,
	handleClick,
	onReset,
}) => {
	const btns = [
		{
			name: 'minus',
			title: 'Minus',
		},
		{
			name: 'plus',
			title: 'plus',
		},
		{
			name: 'reset',
			title: 'reset',
		},
	]
	return (
		<div className='d-flex align-items-center justify-content-center w-100'>
			{btns.map(btn => (
				<button
					key={btn.name}
					name={btn.name}
					onClick={handleClick}
					className='btn p-3 btn-outline-light w-100 mx-2'
					type='button'
				>
					{btn.title}
				</button>
			))}
		</div>
	)
}
