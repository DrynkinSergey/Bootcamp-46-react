// import NotFound from '../NotFound';

import { UsersItem } from './UsersItem'

export const UsersList = ({ onDeleteUser, users, isAvailable }) => {
	return (
		<div className='mb-5'>
			{isAvailable
				? users
						.filter(user => user.isOpenToWork)
						.map(user => (
							<UsersItem
								onDeleteUser={onDeleteUser}
								key={user.id}
								user={user}
							/>
						))
				: users.map(user => (
						<UsersItem onDeleteUser={onDeleteUser} key={user.id} user={user} />
				  ))}
		</div>
	)
}
