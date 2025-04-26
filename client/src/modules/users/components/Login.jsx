import './login.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setIsLoggedIn }) => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [loginSuccess, setLoginSuccess] = useState(false); 

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'https://padhlo-ai-production.up.railway.app/api/users/login';
      const { data: res } = await axios.post(url, data);
      localStorage.setItem('token', res.token);
      localStorage.setItem("userId", res.userId);
      console.log('Login response:', res);

      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true); 
      setLoginSuccess(true);  // set flag to true after login
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate('/');
    }
  }, [loginSuccess, navigate]);

  return (
    <div className='login-container'>
      <div className='login-form'>
        <div className="left">
          <h1>New Here?</h1>
          <Link to='/signup'>
            <button type='button' className='goto-signup-btn'>
              Sign Up
            </button>
          </Link>
        </div>

        <div className="right">
          <form className='form-container' onSubmit={handleSubmit}>
            <h1>Login To Your Account</h1>

            <input
              type="email"
              placeholder='Email'
              name='email'
              onChange={handleChange}
              value={data.email}
              required
              className='input'
            />

            <input
              type="password"
              placeholder='Password'
              name='password'
              onChange={handleChange}
              value={data.password}
              required
              className='input'
            />

            {error && <div className='error-msg'>{error}</div>}

            <button type='submit' className='login-btn'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
