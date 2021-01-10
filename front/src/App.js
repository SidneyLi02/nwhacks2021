import React, { useState } from 'react';
import Layout from './components/Layout';

export default function App() {

  // false by default, second state can be changed
  const [enterApp, setEnter] = useState(false);
  const [loggedIn, setLogged] = useState(false);
  const [clickRegister, setRegister] = useState(false);

  return (
    <div>
      <Layout transfer = {enterApp} startTransfer = {setEnter}
              loggedIn = {loggedIn} hasLoggedIn = {setLogged} 
              clickRegister = {clickRegister} hasClicked = {setRegister}/>
              {/* might want to change in future because redundancy */}
    </div>
  )
}

