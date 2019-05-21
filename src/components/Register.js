import React, { Component } from 'react';
import './../styles/register.scss';

class Register extends Component {

  constructor() {
    super();

    this.state = {
      firstName: null,
      lastName: null,
      email: '',
    };
  }

  render() {
    return(
      <div classname="Header FlexRow JustifyCenter AlignCenter">
        <h1>Registration</h1>
        <div className="LoginForm FlexCol JustifyCenter AlignCenter">
          <input autoFocus value={this.state.firstName} placeholder="First Name..." onChange={e => this.setField(e.target.value, 'firstName')}  type="text" className="LoginFormField"/>
          <input value={this.state.lastName} placeholder="Last Name..." onChange={e => this.setField(e.target.value, 'lastName')}  type="text" className="LoginFormField"/>
          <input value={this.state.email} placeholder="Email" onChange={e => this.setField(e.target.value, 'email')} type="text" className="LoginFormField"/>
          <div className="Button FlexCol JustifyCenter AlignCenter">
            Register
          </div>
        </div>
      </div>
    )
  }
}

export default Register;