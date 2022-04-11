import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakeDb';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import './ReviewOrder.css';

const ReviewOrder = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const [subTotal, setSubTotal] = useState(0);

    const removeItem = (pd) => {
        const product = cart.filter(item => item.id !== pd.id);
        setCart(product);
        setSubTotal(subTotal - (pd.price * pd.quantity));
        removeFromDb(pd.id);
    }

    useEffect(() => {
        let total = 0; 
        cart.length && cart.map(pd => {
            total += (pd.price * pd.quantity);
        })
        setSubTotal(total);
    }, [cart])
    return (
        <div className="container">
            <h6 className='bg-info py-3 mt-5 text-center'>Total cart products ({cart.length})</h6>
            {
                cart.length ? cart.map(item => <ReviewProduct item={item} key={item.id} removeItem = {removeItem}></ReviewProduct>) : <p className="py-3 text-center mt-3 bg-warning">No items selected...</p>
            }
            <h5 className="my-3 py-3 pe-5 text-end bg-primary">Sub Total: {subTotal}</h5>

            <hr/>
            <div className='d-flex justify-content-between mt-5'>
                <Link to='/'>
                    <button className="order-shopping-button">Continue to shopping</button>
                </Link>
                <Link to='/shipping'>
                    <button className='order-checkout-button'>Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ReviewOrder;