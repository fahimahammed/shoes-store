import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='container my-4 text-center'>
            <h3 className="brand-color">Please Register</h3>
            <form className='form-style text-center'>
                <input type="text" className='form-control w-25 mx-auto my-2' placeholder="Username"></input>
                <input type="email" className='form-control w-25 mx-auto my-2' placeholder="Email"></input>
                <input type="password" className='form-control w-25 mx-auto my-2' placeholder="Password"></input>
                <button type="submit" className='btn brand-btn w-25 ' value="Login"> Register</button>
            </form>
            <Link className='text-decoration-none' to='/login'>I have an account</Link>
        </div>
    );
};

export default Register;