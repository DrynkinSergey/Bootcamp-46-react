import { Component } from 'react'
import  ReactDOM  from 'react-dom'

	
const root = 	document.getElementById('modal')
export class Modal extends Component {

	closeModalBackdrop =(event)=>{
		if(event.target === event.currentTarget){
			this.props.onModalClose()
		}
	}
	handlePressKey =(event)=>{
			if(event.code ==='Escape'){
				this.props.onModalClose()
			}
		}


	componentDidMount(){
		document.addEventListener('keydown', this.handlePressKey);
	}


	componentWillUnmount(){
		document.removeEventListener('keydown', this.handlePressKey)
	}

  render(){
  const { children, onModalClose,title } = this.props
	return ReactDOM.createPortal( 
		<>
			<div className='modal-backdrop fade show' />

			<div className='modal fade show' onClick={this.closeModalBackdrop} style={{ display: 'block' }}>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>{title || 'Modal'}</h5>
							<button
								onClick={onModalClose}
								type='button'
								className='btn-close'
								aria-label='Close'
							/>
						</div>
						<div className='modal-body'>
          
            {children}</div>

					</div>
				</div>
			</div>
		</>, root
	)
  }
}
