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
	render() {
		return (
			<Layout>
				<UserFilters />
				<UsersList users={usersJson} />
			</Layout>
		)
	}
}
