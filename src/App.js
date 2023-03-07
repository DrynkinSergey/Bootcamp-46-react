import { Component } from 'react'
// import { ColorPicker } from './components/ColorPicker'
// import { Counter } from './components/Counter'
// import { Flex } from './components/Flex.styled'
// import { LoginForm } from './components/LoginForm'
// import colorsJson from './assets/colors.json'
// import { TodoList } from './components/TodoList'
import { UserFilters } from './components/UserFilters'
import { UsersList } from './components/Users/UsersList'
import { Layout } from './components/Layout'
import usersJson from './assets/users.json'
export class App extends Component {
	state = {
		users: usersJson,
		filters: {
			isAvailable: false,
			searchStr: '',
			skill: '',
		},
	}

	handleChengeInput = str => {
		this.setState(prevState => ({
			filters: {
				...prevState.filters,
				searchStr: str,
			},
		}))
	}

	handleChengeAvailable = () => {
		this.setState(prevState => ({
			filters: {
				...prevState.filters,
				isAvailable: !prevState.filters.isAvailable,
			},
		}))
	}

	handleDeleteUser = id => {
		this.setState(prevState => ({
			users: prevState.users.filter(user => user.id !== id),
		}))
	}
	handleResetInput = () => {
		this.setState(prevState => ({
			filters: {
				...prevState.filters,
				searchStr: '',
			},
		}))
	}

	applyFilters = () => {
		return this.state.users.filter(user =>
			user.name
				.toLowerCase()
				.includes(this.state.filters.searchStr.toLowerCase())
		)
	}

	render() {
		const { filters } = this.state
		const { isAvailable, skill, searchStr } = filters
		return (
			<Layout>
				<UserFilters
					onReset={this.handleResetInput}
					isAvailable={isAvailable}
					searchStr={searchStr}
					onChangeInput={this.handleChengeInput}
					onChangeAvailable={this.handleChengeAvailable}
				/>
				<UsersList
					isAvailable={isAvailable}
					onDeleteUser={this.handleDeleteUser}
					users={this.applyFilters()}
				/>
			</Layout>
		)
	}
}
