import React from 'react'
import './Register.css'

export default class RegisterComponent extends React.Component {

    registerHandler=()=>{
        alert("You registered")
    }
    
    render() {
        return (
            <div className='register'>
                <form className='Register-Form'>
                    <label>Name</label>
                    <input type='text' placeholder="Your Full Name" />
                    <label>Email</label>
                    <input type='email' placeholder="youremail@gmail.com" />
                    <label>Password</label>
                    <input type="password" placeholder="********" />
                    <button onClick={this.registerHandler}>Register</button>
                </form>
                <button className='register-changer' onClick={() => { this.props.name('register') }}>Have an account? Click Here </button>
            </div>
        )
    }
}