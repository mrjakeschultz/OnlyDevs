import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../actions/auth';
// import { clearErrors } from '../actions/errorActions';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const dispatch = useDispatch();
    // const error = useSelector((state) => state.error);
    
    const onSubmit = (e) => {
        e.preventDefault();
    
        const user = {
        email,
        password,
        };
    
        // Attempt to login
        // dispatch(login(user));
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