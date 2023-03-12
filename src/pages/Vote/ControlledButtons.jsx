import React from 'react'

export const ControlledButtons = ({ vote }) => {
	return (
		<div className='d-flex align-items-center justify-content-center w-100'>
			<button
				onClick={vote}
				className='btn p-3 btn-outline-light w-100 mx-2'
				type='button'
				name='linux'
			>
				Linux
			</button>

			<button
				onClick={vote}
				className='btn p-3 btn-outline-light w-100 mx-2'
				type='button'
				name='windows'
			>
				Window
			</button>
			<button
				onClick={vote}
				className='btn p-3 btn-outline-light w-100 mx-2'
				type='button'
				name='macOS'
			>
				MacOS
			</button>
		</div>
	)
}
