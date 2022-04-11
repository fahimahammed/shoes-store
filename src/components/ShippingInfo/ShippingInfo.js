import React from 'react';

const ShippingInfo = () => {
    return (
        <div className="container">
            <h4 className='text-center'>Shipping Information</h4>

            <div className='w-50'>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Phone No</label>
                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Shipping Address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Shipping Address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>

                    <h6>Payment method: </h6>
                    <div className='d-flex flex-wrap'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                            <label class="form-check-label" for="flexRadioDefault1">Cash on delivery</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label class="form-check-label" for="flexRadioDefault2">Online Payment</label>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Proceed to pay</button>
                </form>
            </div>
        </div>
    );
};

export default ShippingInfo;