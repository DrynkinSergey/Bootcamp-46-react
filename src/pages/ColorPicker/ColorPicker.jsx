import React from 'react'
import {
	BackgroundTheme,
	ColorPalette,
	Color,
	ColorsList,
} from './ColorPicker.styled'

const colorsData = [
	{
		id: 1,
		color: 'white',
	},
	{
		id: 2,
		color: 'lightblue',
	},
	{
		id: 3,
		color: 'orange',
	},
	{
		id: 4,
		color: 'tomato',
	},
	{
		id: 5,
		color: 'teal',
	},
	{
		id: 6,
		color: 'yellow',
	},
]

export class ColorPicker extends React.Component {
	state = {
		colors: colorsData,
		bgIndexColor: 0,
	}
	changeColor = index => {
		this.setState({ bgIndexColor: index })
	}
	getBgColor = index => {
		return index === this.state.bgIndexColor
			? this.state.colors[this.state.bgIndexColor].color
			: this.state.colors[index].color
	}

	render() {
		const { colors, bgIndexColor } = this.state
		return (
			<BackgroundTheme bgColor={colors[bgIndexColor].color}>
				<ColorPalette>
					<h1>Наш колір:{colors[bgIndexColor].color}</h1>
					<ColorsList>
						{colors.map((item, index) => (
							<Color
								bgItemColor={() => this.getBgColor(index)}
								onClick={() => this.changeColor(index)}
								key={item.id}
							>
								{item.color}
							</Color>
						))}
					</ColorsList>
				</ColorPalette>
			</BackgroundTheme>
		)
	}
}
