import React from 'react';
import { Link } from 'react-router-dom';
import delivery from '../../images/delivary.jpg';

const ShippingInfo = () => {
    return (
        <div className="container">
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <h4 className='text-center brand-color'>DELIVERY ADDRESS</h4>

                    <div className=''>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Phone No</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Shipping Address</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <h6>Payment method: </h6>
                            <div className='d-flex flex-wrap mb-4'>
                                <div class="form-check me-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                    <label class="form-check-label" for="flexRadioDefault1">Cash on delivery</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">Online Payment</label>
                                </div>
                            </div>

                            <Link to='/order-track'><button type="submit" className="btn brand-btn w-100">Confirm Order</button></Link>
                        </form>
                    </div>
                </div>

                <div className='col-md-6'>
                    <img className='img-fluid w-100 my-auto' src={delivery} alt="delivary man"></img>
                </div>

            </div>
        </div>
    );
};

export default ShippingInfo;