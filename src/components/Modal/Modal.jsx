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
			<BackDrop onClick={onModalClose}>
				<ModalConent>
					<div className='Modal'>{children}</div>
				</ModalConent>
			</BackDrop>,
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
const BackDrop = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.8);
`
