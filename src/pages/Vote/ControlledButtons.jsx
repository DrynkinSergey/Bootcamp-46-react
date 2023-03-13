import React from 'react'

export const ControlledButtons = ({ vote }) => {
	const btns = [
		{ title: 'LINUX', name: 'linux' },
		{ title: 'WINDOWS', name: 'windows' },
		{ title: 'MAC OS', name: 'macOS' },
	]
	return (
		<div className='d-flex align-items-center justify-content-center w-100'>
			{btns.map(btn => (
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
