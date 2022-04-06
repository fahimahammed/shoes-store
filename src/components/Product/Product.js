import React from 'react';

const Product = ({product}) => {
    const {name, price, ratings, ratingsCount, img} = product;
    return (
        <div class="card mb-4" style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="Product img"></img>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h6 class="card-text">Price: ${price}</h6>
                <p>Ratings: {ratings} ({ratingsCount}) </p>
                <a href="#" class="btn btn-primary">Buy now</a>
            </div>
        </div>
    );
};

export default Product;