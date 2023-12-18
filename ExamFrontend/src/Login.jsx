import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'

function Login() {

    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();



        navigate('/');
    };


return (
<div className="container">
            <div className="login-form">
                <h2>Welcome Back</h2>
                <form>
                    <div className="form-group" >
                        <label htmlFor="username" >Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
);

}
export default Login