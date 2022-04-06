import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div className="container d-flex flex-wrap justify-content-between mt-5">
            {
                products && products.slice(0, 12).map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Products;