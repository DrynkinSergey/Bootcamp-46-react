import { Component } from 'react'
import { ColorPicker } from './components/ColorPicker'
import colors from './assets/colors.json'

export class App extends Component {
	render() {
		return <ColorPicker colors={colors} />
	}
}
