import React from 'react'
import './Login.css'

export default class LoginComponent extends React.Component {

    render() {
        return (
            <div className='login'>
                <form className='Login-Form'>
                    <label>Email</label>
                    <input type='email' placeholder="youremail@gmail.com" />
                    <label>Password</label>
                    <input type="password" placeholder="********" />
                    <button >Login</button>
                </form>
                <button className='login-changer' onClick={() => { this.props.name('login') }}>Don't have an account? Click Here </button>
            </div>
        )
    }
}