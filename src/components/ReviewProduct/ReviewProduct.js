import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewOrder.css';

const ReviewProduct = ({item, removeItem}) => {
    const {img, name, price, quantity} = item;
    console.log(item);
    return (
        <div className="row order-cart-style mx-1 my-3 p-3 align-items-center">
            <div className="col-md-3">
                <img className='img-fluid order-img-style'src = {img} alt="product img"></img>
            </div>
            <h6 className='col-md-5'>{name}</h6>
            <h6 className='col-md-1'>{quantity}</h6>
            <h6 className='col-md-2'>{price}</h6>
            <div onClick={()=> removeItem(item)} className='col-md-1'>
                <FontAwesomeIcon className='text-success' icon={faDeleteLeft} size="2x"/>
            </div>
        </div>
    );
};

export default ReviewProduct;