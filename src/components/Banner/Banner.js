import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-style text-center text-white py-5 my-5'>
            <h1 className='pt-5'>DO YOU NEED MORE TIPS?</h1>
            <h6>Sign up free and get the latest tips.</h6>

            <div className="d-flex justify-content-center pb-5">
                <div class="input-group mb-3 mt-3 subscribe-style">
                    <input type="text" className="form-control py-3" placeholder="Write your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-success" type="button" id="button-addon2">YES, I WANT</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;