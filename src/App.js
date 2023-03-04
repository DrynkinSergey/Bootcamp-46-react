import { AppWithStyled } from './components/AppWithStyled/AppWithStyled'
import clsx from 'clsx'

const App = () => {
	return (
		<div>
			<AppWithStyled />
			<AppWithStyled />
		</div>
	)
}
// const Alert = ({ variant, outlined, elevated, children }) => {
// 	return (
// 		<p
// 			className={clsx(
// 				`alert`,
// 				variant,
// 				outlined && 'is-outlined',
// 				elevated && 'is-elevated'
// 			)}
// 		>
// 			{children}
// 		</p>
// 	)
// }
// const App = () => {
// 	return (
// 		<div>
// 			<Alert variant='success' outlined elevated>
// 				success
// 			</Alert>
// 			<Alert variant='info'>info</Alert>
// 			<Alert variant='error' outlined>
// 				error
// 			</Alert>
// 			<Alert variant='warning' elevated>
// 				warning
// 			</Alert>
// 		</div>
// 	)
// }

export default App
