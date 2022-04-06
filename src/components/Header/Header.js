import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
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
                        <img className='img-fluid' src={logo} alt="Logo"></img>
                    </div>
                    <div class="input-group mb-3 w-50 mt-3">
                        <input type="text" className="form-control py-3" placeholder="Write here..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-success" type="button" id="button-addon2">Search</button>
                    </div>
                    <div className='d-flex flex-wrap'>
                        <h5 className="me-3">Register</h5>
                        <h5>Login</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;