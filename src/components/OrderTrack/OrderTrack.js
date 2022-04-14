import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLocation, faTruck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OrderTrack = () => {
    return (
        <div className="container">
            <h3>My order</h3>
            <div className="row brand-background py-5">
                <div className="col-md-4 d-flex flex-wrap align-items-center">
                    <FontAwesomeIcon className='border border-1 rounded-circle p-4 icon-bg me-2' icon={faUser} size="2x"/>
                    <div>
                        <h5>Customer</h5>
                        <h6>Fahim Ahammed</h6>
                        <h6>fahim@eshop.com</h6>
                    </div>
                </div>
                <div className="col-md-4 d-flex flex-wrap align-items-center">
                    <FontAwesomeIcon className='border border-1 rounded-circle p-4 icon-bg me-2' icon={faTruck} size="2x"/>
                    <div>
                        <h5>Order Info</h5>
                        <h6>Shipping: Bangladesh</h6>
                        <h6>Payment: COD</h6>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                    <FontAwesomeIcon className='border border-1 rounded-circle p-4 icon-bg me-2' icon={faLocation} size="2x"/>
                    <div>
                        <h5>Deliver to</h5>
                        <h6>Mujgunni Bus Stand, Khalishpur, Khulna-9000</h6>
                        <h6>01755111999</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTrack;