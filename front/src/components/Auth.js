import React, { useState } from 'react'
import './Auth.css'
import networking from '../network/index.js'

export default function Auth (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { hasLoggedIn } = props

  const submit = async (e) => {
    e.preventDefault()
    await networking.auth(username, password)
      ? hasLoggedIn(true)
      : hasLoggedIn(false)
  }

  return (
    <div className='outer, fixOuter'>
      <div className='inner'>
        <form>

          <h3>Log in</h3>

          <div className='form-group'>
            <label>Username</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter username'
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter password'
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <div className='custom-control custom-checkbox'>
              <input type='checkbox' className='custom-control-input' id='customCheck1' />
              <label className='custom-control-label' htmlFor='customCheck1'>Remember me</label>
            </div>
          </div>

          <button onClick={submit} type='submit' className='btn btn-dark btn-lg btn-block'>Sign in</button>
        </form>
      </div>
    </div>
  )
}
