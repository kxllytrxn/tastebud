import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser, printLocalStorage } from '@/utils/auth'
import "./styles/Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
            
    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(email, password)
        .then(() => {
            navigate('/home'); 
            printLocalStorage(); // debug statement - used to see if stored in local storage
        })
        .catch((err) => {
            console.log("error on login: ", err);
            setError(err); 
        });
    };

    return (
      <div className="login-container">
        <h2>Login to Tastebud</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    );
  };
  
  export default Login;