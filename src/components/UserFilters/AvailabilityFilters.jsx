export const AvailabilityFilters = ({ onChangeAvailable, isAvailable }) => {
	return (
		<fieldset className='me-5'>
			<legend>Availability:</legend>

			<div className='form-check'>
				<label className='form-check-label'>
					<span>Availability checkbox</span>
					<input
						checked={isAvailable}
						onChange={onChangeAvailable}
						className='form-check-input'
						type='checkbox'
					/>
				</label>
			</div>
		</fieldset>
	)
}
