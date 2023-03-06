export const SearchInput = () => {
	return (
		<div className='input-group input-group-lg mb-5'>
			<input
				type='text'
				className='form-control'
				placeholder='Type to search ...'
			/>
			<button className='btn btn-outline-secondary' type='button'>
				Reset
			</button>
		</div>
	)
}
