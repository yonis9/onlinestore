import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ name,  imagePath, price, description, id, onAddToCart}) => {
    return (
        <div className='product-card'>
            <div className='product-image'>
            <Link to={{pathname: `/product/${name}`, state: { name,  imagePath, price, description, id}}}><img  src={imagePath} alt='productImg'/></Link>
            </div>
            <h1>{name}</h1>
            <div className='price-cart'>
                <p>${price}</p>
                <button onClick={() =>onAddToCart(id)}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductCard;