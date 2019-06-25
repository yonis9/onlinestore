import React, { Component } from 'react';
import './Product.css';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

class Product extends Component {

    render() {
        const { name, description, price, imagePath, id} = this.props.location.state;
        console.log(this.props)
    return (
      
        <div>
             <ScrollToTop />
            <div className='product-page'>
                <div className='prodcut-page-image'>
                    <img src={imagePath} alt='product' />
                </div>
                <div className='product-info'>
                    <h1>{name}</h1>
                     <div className='product-price-cart'>
                         <p>${price}</p>
                             <div className='product-description'>
                                 <p>{description}</p></div>
                                 <button onClick={() =>this.props.onAddToCart(id)}>ADD TO CART</button>
                                </div>
                         </div>
                 </div>
            <Footer />
        </div>
    )
    }
}

export default Product;