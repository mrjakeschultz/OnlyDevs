import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const onSubmit = (e) => {
        e.preventDefault();
    
        const user = {
        email,
        password,
        };
    
      
    };
    
    return (
        <div className='form-container'>
        <h1>
            Account <span className='text-primary'>Login</span>
        </h1>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <input
            type='submit'
            value='Login'
            className='btn btn-primary btn-block'
            />
        </form>
        </div>
    );
}; 

export default Login;