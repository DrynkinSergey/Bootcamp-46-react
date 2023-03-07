const skilsList = [
	{ value: 'all', label: 'All' },
	{ value: 'react', label: 'React' },
	{ value: 'angular', label: 'Angular' },
	{ value: 'vue', label: 'Vue' },
]

export const SkilsFilters = ({ onChangeSkill, skillValue }) => {
	const handleChangeRadio = event => {
		onChangeSkill(event)
	}
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
								checked={skill.value === skillValue}
								value={skill.value}
								className='form-check-input'
								onChange={handleChangeRadio}
							/>
						</label>
					</div>
				))}
			</div>
		</fieldset>
	)
}
