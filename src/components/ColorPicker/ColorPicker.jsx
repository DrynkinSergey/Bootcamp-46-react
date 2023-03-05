import React from 'react'
import {
	BackgroundTheme,
	ColorPalette,
	Color,
	ColorsList,
} from './ColorPicker.styled'
export const ColorPicker = ({ colors }) => {
	return (
		<BackgroundTheme bgColor='white'>
			<ColorPalette>
				<ColorsList>
					{colors.map(item => (
						<Color key={item.id}>{item.color}</Color>
					))}
				</ColorsList>
			</ColorPalette>
		</BackgroundTheme>
	)
}
