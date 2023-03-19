import { useCallback, useState } from 'react'

function Counter() {
	const [value, setValue] = useState()
	const [secondInput, setSecondInput] = useState()
	const callbackCach = useCallback(e => setValue(e.target.value), [])
	console.log(1)
	return (
		<div>
			<h1>Callbacks caching examples:</h1>

			<div className='part'>
				<h3>Using useCallback hook:</h3>
				<input onChange={callbackCach} />
				<p>Input value is: {value}</p>
			</div>

			<div className='part'>
				<h3>Without useCallback hook:</h3>
				<input onChange={e => setSecondInput(e.target.value)} />
				<p>Input value is: {secondInput}</p>
			</div>
		</div>
	)
}
export { Counter }
