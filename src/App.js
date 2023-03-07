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
			skill: 'all',
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
	handleChangeSkill = event => {
		this.setState(prevState => ({
			filters: {
				...prevState.filters,
				skill: event.target.value,
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
		if (this.state.filters.skill === 'all')
			return this.state.users.filter(user =>
				user.name
					.toLowerCase()
					.includes(this.state.filters.searchStr.toLowerCase())
			)
		else {
			return this.state.users.filter(user =>
				user.skills.includes(this.state.filters.skill)
			)
		}
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
					skillValue={skill}
					onChangeInput={this.handleChengeInput}
					onChangeAvailable={this.handleChengeAvailable}
					onChangeSkill={this.handleChangeSkill}
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
