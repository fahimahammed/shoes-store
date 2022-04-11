import React, { useEffect, useState } from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakeDb';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
  
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
    }, [products])

    const addToCart = (selectedProduct) =>{
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        // console.log(cart);
        addToDb(selectedProduct.id);
    }


    return (
        <div className="container d-flex flex-wrap justify-content-between mt-5">
            {
                products && products.slice(0, 12).map(product => <Product product={product} key={product.id} addToCart = {addToCart}></Product>)
            }
        </div>
    );
};

export default Products;