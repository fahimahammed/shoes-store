import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='container my-4 text-center'>
            <h3 className="brand-color">Please Login</h3>
            <form className='form-style text-center'>
                <input type="email" className='form-control w-25 mx-auto my-2' placeholder="Enter email"></input>
                <input type="password" className='form-control w-25 mx-auto my-2' placeholder="Enter password"></input>
                <button type="submit" className='btn brand-btn w-25 ' value="Login"> Login</button>
            </form>
            <Link className='text-decoration-none' to='/register'>Create account</Link>
        </div>
    );
};

export default Login;