import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Section3.css';
import { Link } from 'react-router-dom';


const Section3 = ({ randProducts, onAddToCart }) => {
    console.log(randProducts)
    return (
        <div className='sec3'>
            {
                randProducts.length ? 
                <div className='home-products'>
               { randProducts.map(product => 
                 <ProductCard key={product._id}
                                    name={product.name}
                                    imagePath={product.imagePath} 
                                    price={product.price}
                                    description={product.description} 
                                    id={product._id} 
                                    onAddToCart={onAddToCart}/>
            )}
            </div>
            :
           
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            
            }

            
            <button id='sec3btn'><Link to="/shop">SEE ALL PRODUCTS</Link></button>
        </div>
    )
}

export default Section3;