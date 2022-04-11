import { faFax, faLocationCrosshairs,  faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='container mb-5 pt-5 d-flex flex-wrap justify-content-between'>
    
            <div className='text-center contact-info py-5'>
                <div className='pb-3'>
                    <FontAwesomeIcon className='border border-3 rounded-circle border-success p-2 text-success' icon={faPhone} size="2x"/>
                </div>
                <h4>Call Us 24x7</h4>
                <h6>0736 230 063</h6>
            </div>

            <div className='text-center contact-info py-5'>
                <div className='pb-3'>
                    <FontAwesomeIcon className='border border-3 rounded-circle border-success p-2 text-success' icon={faLocationCrosshairs} size="2x"/>
                </div>
                <h4>Headquarter</h4>
                <h6>Boikali, Khulna</h6>
            </div>

            <div className='text-center contact-info py-5'>
                <div className='pb-3'>
                    <FontAwesomeIcon className='border border-3 rounded-circle border-success p-2 text-success' icon={faFax} size="2x"/>
                </div>
                <h4>Fax</h4>
                <h6>0736 230 063</h6>
            </div>
        </div>
    );
};

export default ContactUs;