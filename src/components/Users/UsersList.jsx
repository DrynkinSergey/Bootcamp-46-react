import { Component } from 'react'

// import NotFound from '../NotFound';

import { UsersItem } from './UsersItem'

export class UsersList extends Component {
	state = {
		users: this.props.users,
	}
	render() {
		const { users } = this.state
		return (
			<div className='mb-5'>
				{users.map(user => (
					<UsersItem key={user.id} user={user} />
				))}
			</div>
		)
	}
}
