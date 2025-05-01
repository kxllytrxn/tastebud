import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '@/utils/auth'
import Button from '@/components/Button/Button';
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
        })
        .catch((err) => {
            console.log("error on login: ", err);
            setError(err); 
        });
    };

    return (
      <div className="login-container">
        <div className="login-header-bar"></div>

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
          <Button 
            buttonText="Login"
            onClick={handleLogin}
            variant = "primary"
            color = "green"
          />
        </form>
        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    );
  };
  
  export default Login;