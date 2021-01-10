import React, { useState } from 'react'
import Layout from './components/Layout'
import Main from './components/Main'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function App () {
  // false by default, second state can be changed
  const [enterApp, setEnter] = useState(true)
  const [loggedIn, setLogged] = useState(false)
  const [clickRegister, setRegister] = useState(false)

  if (loggedIn && enterApp) {
    return <Main />
  } else {
    return (
      <div>

        <Layout
          transfer={enterApp} startTransfer={setEnter}
          loggedIn={loggedIn} hasLoggedIn={setLogged}
          clickRegister={clickRegister} hasClicked={setRegister}
        />
        {/* might want to change in future because redundancy */}
      </div>
    )
  }
}
