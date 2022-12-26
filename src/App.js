import './App.css';
import React, { useState } from 'react'
import LoginComponent from './Components/Login/Login';
import RegisterComponent from './Components/Register/Register';

function App() {

  let [account, setAccount] = useState('login')

  let changeAccountType = (props) => {
    setAccount(account = props)
  }

  return (
    <div className="App">
      {account === "register" ? <LoginComponent name={changeAccountType} /> : <RegisterComponent name={changeAccountType} />}
    </div>
  );
}

export default App;
