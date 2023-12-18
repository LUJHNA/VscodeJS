import React from 'react'
import './App.css'


function Register() {
    return (
<div className="container">
            <div className="register-form">
                <h2>Welcome to *InsertName*</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="login-button">Sign up</button>
                </form>
            </div>
        </div>

    );
}

export default Register