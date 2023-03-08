import { Component } from 'react'
// import { ColorPicker } from './components/ColorPicker'
// import { Counter } from './components/Counter'
// import { Flex } from './components/Flex.styled'
// import img from './components/Banner/image.jpg'

import { LoginForm } from './components/LoginForm'
import { Timer } from './components/Timer'
import colorsJson from './assets/colors.json'
import { TodoList } from './components/TodoList'
import { UserFilters } from './components/UserFilters'
import { UsersList } from './components/Users/UsersList'
import { Layout } from './components/Layout'
import usersJson from './assets/users.json'
import { NotFound } from './components/NotFound/NotFound'
import { Modal } from './components/Modal/Modal'
import NewUserForm from './components/Users/NewUserForm'

const USERS_KEY = 'users'
export class App extends Component {
	state = {
		users: usersJson,
		filters: {
			isAvailable: false,
			searchStr: '',
			skill: 'all',
		},
		modalIsOpen: false,
	}

	componentDidMount() {
		const users = localStorage.getItem(USERS_KEY)
		if (users && JSON.parse(users).length) {
			this.setState({
				users: JSON.parse(users),
			})
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.users.length !== this.state.users.length) {
			localStorage.setItem(USERS_KEY, JSON.stringify(this.state.users))
		}
	}

	handleOpenModel = () => {
		this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }))
	}

	handleCreateUser = user => {
		this.setState(prevState => ({
			users: [user, ...prevState.users],
			modalIsOpen: !prevState.modalIsOpen,
		}))
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
		if (this.state.filters.skill === 'all') {
			return this.state.users.filter(
				user =>
					user.name
						.toLowerCase()
						.includes(this.state.filters.searchStr.toLowerCase()) ||
					user.email
						.toLowerCase()
						.includes(this.state.filters.searchStr.toLowerCase())
			)
		} else {
			return this.state.users
				.filter(user => user.skills.includes(this.state.filters.skill))
				.filter(user =>
					user.name
						.toLowerCase()
						.includes(this.state.filters.searchStr.toLowerCase())
				)
		}
	}

	render() {
		const { filters, modalIsOpen } = this.state
		const { isAvailable, skill, searchStr } = filters
		return (
			<Layout>
				<UserFilters
					isAvailable={isAvailable}
					searchStr={searchStr}
					skillValue={skill}
					openModal={this.handleOpenModel}
					onReset={this.handleResetInput}
					onChangeInput={this.handleChengeInput}
					onChangeAvailable={this.handleChengeAvailable}
					onChangeSkill={this.handleChangeSkill}
				/>
				{this.state.users.length !== 0 ? (
					<UsersList
						isAvailable={isAvailable}
						onDeleteUser={this.handleDeleteUser}
						users={this.applyFilters()}
					/>
				) : (
					<NotFound />
				)}
				{modalIsOpen && (
					<Modal onModalClose={this.handleOpenModel}>
						<NewUserForm onUserCreate={this.handleCreateUser} />
					</Modal>
				)}
			</Layout>
		)
	}
}
