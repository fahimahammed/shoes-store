import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';


const Footer = () => {
    return (
        <div className='shop-footer'>
            <div className='container'>
               <div className='row py-4 justify-content-between'>
                    <div className='col-md-4'>
                        <img className='img-fluid' src={logo} alt='logo'></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    <div className="col-md-3 pt-5 text-center">
                        <h6>About Us</h6>
                        <h6>Contact Us</h6>
                        <h6>Shop now</h6>
                        <h6>Career</h6>
                        <h6>Blog</h6>
                        
                    </div>

                    <div className="col-md-4 pt-5">
                        <img className='img-fluid' src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="Pay with"></img>
                    </div>
               </div>
            </div>
            <p className='text-center text-success pb-3'>Copyright © 2022 Shoes-Store</p>
        </div>
    );
};

export default Footer;