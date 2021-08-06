import React from 'react';
import "./login.css"

const Login = () => {
    return (
        <div>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">KeshavSocial</h3>
                        <span className="loginDesc">
                            Connect with friends and the world around you on KeshavSocial
                        </span>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input placeholder="Email" className="loginInput" />
                            <input placeholder="Password" className="loginInput" />
                            <button className="loginButton">Log In</button>
                            <span className="loginForgot">Forgot Password?</span>
                            <button className="loginRegisterButton">Create a New Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
