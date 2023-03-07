import { FiPlus } from 'react-icons/fi'

import { AvailabilityFilters } from './AvailabilityFilters'
import { SearchInput } from './SearchInput'
import { SkilsFilters } from './SkilsFilters'

export const UserFilters = ({
	onChangeAvailable,
	onChangeInput,
	onReset,
	isAvailable,
	searchStr,
}) => {
	return (
		<>
			<div className='d-flex align-items-center mb-5'>
				<AvailabilityFilters
					isAvailable={isAvailable}
					onChangeAvailable={onChangeAvailable}
				/>

				<SkilsFilters />

				<button type='button' className='btn btn-primary btn-lg ms-auto'>
					<FiPlus />
				</button>
			</div>
			<SearchInput
				onReset={onReset}
				onChangeInput={onChangeInput}
				searchStr={searchStr}
			/>
		</>
	)
}
