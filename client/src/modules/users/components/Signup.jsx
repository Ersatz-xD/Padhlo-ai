import './signup.css';
import React , { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:5000/api/users/signup';
            const {data: res} = await axios.post(url, data);
            navigate('/login')
            console.log(res.message);
        } catch (error) {
            if(
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ){
                setError(error.response.data.message)
            }
        }
    }

  return (
    <div className='signup-container'>
        <div className='signup-form'>
            <div className="left">
                <h1>Welcome Back</h1>
                <Link to= '/login'>
                <button type='button' className='goto-login-btn'>
                    Login
                </button>
                </Link>
            </div>
            <div className="right">
                <form className='form-container' onSubmit={handleSubmit}>
                    <h1>Create Account</h1>

                    <input type="text" 
                    placeholder='First Name'
                    name='firstName'
                    onChange={handleChange}
                    value={data.firstName}
                    required
                    className='input'
                     />

                     
                    <input type="text" 
                    placeholder='Last Name'
                    name='lastName'
                    onChange={handleChange}
                    value={data.lastName}
                    required
                    className='input'
                     />

                     
                    <input type="email" 
                    placeholder='Email'
                    name='email'
                    onChange={handleChange}
                    value={data.email}
                    required
                    className='input'
                     />

                    <input type="password" 
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}
                    value={data.password}
                    required
                    className='input'
                     />
                    
                    {error && <div className='error-msg'> {error} </div>}

                    <button type='submit' className='sign-up-btn'>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup