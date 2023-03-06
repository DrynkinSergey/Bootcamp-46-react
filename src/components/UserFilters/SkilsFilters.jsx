const skilsList = [
	{ value: 'react', label: 'React' },
	{ value: 'angular', label: 'Angular' },
	{ value: 'vue', label: 'Vue' },
]

export const SkilsFilters = () => {
	return (
		<fieldset className='ms-5'>
			<legend>Skils:</legend>

			<div className='d-flex'>
				{skilsList.map(skill => (
					<div key={skill.value} className='form-check me-4'>
						<label className='form-check-label'>
							<span>{skill.label}</span>
							<input
								name='skil'
								type='radio'
								value={skill.value}
								className='form-check-input'
							/>
						</label>
					</div>
				))}
			</div>
		</fieldset>
	)
}
