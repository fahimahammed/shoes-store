import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import useProducts from '../../Hooks/useProducts';
import { getStoredCart } from '../../utilities/fakeDb';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products]);

    const handleLogout = () =>{
        signOut(auth);
    }
    if(user) {
        console.log(user.email);
    }
    return (
        <div>
            <div className='header-style'>
                <div className='container'>

                    <div className='row py-2'>
                        <div className='col-md-4 d-flex flex-wrap justify-content-between text-white'>
                            <h6>+256 888 999 </h6>
                            <h6> info@e-shop.com</h6>
                        </div>
                        <div className="col-md-6">
                            hello
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                    <div className=''>
                        <Link to='/'>
                            <img className='img-fluid' src={logo} alt="Logo"></img>
                        </Link>
                    </div>
                    <div class="input-group mb-3 w-50 mt-3">
                        <input type="text" className="form-control py-3" placeholder="Write here..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-success" type="button" id="button-addon2">Search</button>
                    </div>
                    <div className='d-flex flex-wrap'>
                        <h5 className="me-3">Register </h5>
                        {
                            user ? <h5 onClick={handleLogout}>Logout</h5> : <Link to='/login' className='text-decoration-none'><h5>Login </h5></Link>
                        }
                        {
                            user && <h5 className='text-decoration-none border mx-2 brand-color'>{user.email.slice(0, 5)}</h5>
                        }
                        <Link to='/review-order'>
                            <FontAwesomeIcon className='text-success' icon={faShoppingCart} size="2x"/>
                            <span> {cart.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;