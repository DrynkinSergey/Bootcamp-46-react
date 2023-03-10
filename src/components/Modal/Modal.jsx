import { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const root = document.getElementById('modal')
export class Modal extends Component {
	closeModalBackdrop = event => {
		if (event.target === event.currentTarget) {
			this.props.onModalClose()
		}
	}
	handlePressKey = event => {
		if (event.code === 'Escape') {
			this.props.onModalClose()
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handlePressKey)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handlePressKey)
	}

	render() {
		const { children, onModalClose, title } = this.props
		return ReactDOM.createPortal(
			<>
				<ModalConent className='Overlay' onClick={onModalClose}>
					<div className='Modal'>{children}</div>
				</ModalConent>
			</>,
			root
		)
	}
}

const ModalConent = styled.div`
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`
