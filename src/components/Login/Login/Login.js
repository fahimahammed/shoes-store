import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const loginWithEmailAndPassword = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, {replace: true});
    }
    // console.log(user);
    return (
        <div className='container my-4 text-center'>
            <h3 className="brand-color">Please Login</h3>
            <form onSubmit={loginWithEmailAndPassword} className='form-style text-center'>
                <input type="email" className='form-control w-25 mx-auto my-2' placeholder="Enter email" name='email'></input>
                <input type="password" className='form-control w-25 mx-auto my-2' placeholder="Enter password" name='password'></input>
                <button type="submit" className='btn brand-btn w-25 ' value="Login"> Login</button>
            </form>
            <Link className='text-decoration-none' to='/register'>Create account</Link>
        </div>
    );
};

export default Login;