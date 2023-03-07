export const SearchInput = ({ searchStr, onChangeInput, onReset }) => {
	const handleChange = event => {
		onChangeInput(event.target.value)
	}
	return (
		<div className='input-group input-group-lg mb-5'>
			<input
				type='text'
				className='form-control'
				placeholder='Type to search ...'
				value={searchStr}
				onChange={handleChange}
			/>
			<button
				onClick={onReset}
				className='btn btn-outline-secondary'
				type='button'
			>
				Reset
			</button>
		</div>
	)
}
