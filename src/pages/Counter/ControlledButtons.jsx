import React from 'react'

export const ControlledButtons = ({
	onPlusBtnClick,
	onMinusBtnClick,
	onReset,
}) => {
	return (
		<div className='d-flex align-items-center justify-content-center w-100'>
			<button
				onClick={onMinusBtnClick}
				className='btn p-3 btn-outline-light w-100 mx-2'
				type='button'
			>
				Minus
			</button>

			<button
				onClick={onReset}
				className='btn p-3 btn-outline-light w-100 mx-2'
				type='button'
			>
				Reset
			</button>
			<button
				onClick={onPlusBtnClick}
				className='btn p-3 btn-outline-light w-100 mx-2'
				type='button'
			>
				Plus
			</button>
		</div>
	)
}
