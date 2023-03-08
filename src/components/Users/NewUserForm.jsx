import React, { Component } from 'react'

export class NewUserForm extends Component {
  state=	{
		id: new Date().getTime(),
		name: "TestUser",
		email: "test@april.biz",
		bio: "Assumenda harum mollitia neque, officiis veniam repellat sapiente delectus aspernatur",
		skills: ["react"],
		isOpenToWork: true
	}
  handleUserCreate = (evt) => 
  {
    evt.preventDefault()
    this.props.onUserCreate(this.state)
  }
  
  render() {

    return (
      <form onSubmit={this.handleUserCreate}>NewUserForm
      <input type="text" 
      onChange={(event)=> this.setState({name: event.target.value})} value={this.state.name} />
      <input type="text" 
      onChange={(event)=> this.setState({email: event.target.value})} value={this.state.email} />
      <button>ok</button>
      </form>
    )
  }
}

export default NewUserForm