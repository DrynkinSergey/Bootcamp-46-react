import React, { Component } from 'react'

export class Timer extends Component {
  intervalId = null
  timeoutId = null


  componentDidMount(){
  this.intervalId = setInterval(this.getDate, 1000)
 this.timeoutId= setTimeout(()=> {
    this.setState({
      title:'Hello'
    })
  },5000)
  }
  componentWillUnmount(){
    clearInterval(this.intervalId)
    clearTimeout(this.timeoutId)
  }

  state= {
    date :new Date(),
    title: ''
  }
 
  getDate = () => {
    this.setState({
      date : new Date()
    })
  }
  render() {
    const {date} = this.state
    return (
      <div>{String(date.getHours()).padStart(2,0)+':'+ String(date.getMinutes()).padStart(2,0) + ':' + String(date.getSeconds()).padStart(2,0)}</div>
    )
  }
}

export default Timer