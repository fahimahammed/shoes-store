import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    const createUser = (event) =>{
        event.preventDefault();
        // const name = event.target.userName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='container my-4 text-center'>
            <h3 className="brand-color">Please Register</h3>
            <form onSubmit={createUser} className='form-style text-center'>
                <input type="text" className='form-control w-25 mx-auto my-2' placeholder="Username" name="userName"></input>
                <input type="email" className='form-control w-25 mx-auto my-2' placeholder="Email" name="email"></input>
                <input type="password" className='form-control w-25 mx-auto my-2' placeholder="Password" name="password"></input>
                {
                    error && <p className='text-danger'>{error.message}</p>
                }
                {
                    loading && <p className='text-danger'>Loading...</p>
                }
                <button type="submit" className='btn brand-btn w-25 ' value="Login"> Register</button>
            </form>
            <Link className='text-decoration-none' to='/login'>I have an account</Link>
        </div>
    );
};

export default Register;