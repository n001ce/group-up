import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'
import {Box, Button, TextField } from '@material-ui/core';


class LoginForm extends Component {
  state = {
    email: '',
    pw: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props
    e.preventDefault()
    try {
      await authService.login(this.state);
      handleSignupOrLogin()
      history.push("/")
    } catch (err) {
        alert('Invalid Credentials')
    }
  }

  render() {
    const { email, pw } = this.state
    return (
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          {/* <label htmlFor="email" className={styles.label}>Email</label> */}
          <TextField
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            label="Email"
            variant="outlined"
          />
        </div>
        <div className={styles.inputContainer}>
          {/* <label htmlFor="password" className={styles.label}>Password</label> */}
          <TextField
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
            label="Password"
            variant="outlined"
          />
        </div>
        <div>
          <Button className={styles.Button} color={'primary'} variant="outlined" type='submit'>Log In</Button>
          <Button component={Link} to="/"color={'primary'}variant="outlined" >Cancel</Button>
        </div>
      </form>
    )
  }
}

export default LoginForm
