import React from 'react';

const Product = ({product, addToCart}) => {
    const {id, name, price, ratings, ratingsCount, img} = product;
    return (
        <div class="card mb-4" style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="Product img"></img>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h6 class="card-text">Price: ${price}</h6>
                <p>Ratings: {ratings} ({ratingsCount}) </p>
                <button onClick={()=>addToCart(product)} className="btn btn-primary">Buy now</button>
            </div>
        </div>
    );
};

export default Product;