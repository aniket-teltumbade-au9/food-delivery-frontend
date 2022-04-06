import React, { Component } from 'react'
import LoginComponent from '../components/login-component'

export default class LoginPage extends Component {
  render() {
    return (
      <LoginComponent setUser={this.props.setUser} />
    )
  }
}
