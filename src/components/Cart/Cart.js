import React from 'react';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './Cart.css';
import { Link } from 'react-router-dom';


const Cart = ( { cart, genarateArray, onRemoveCart }) => {
    return (    
    <div>
        <ScrollToTop />
{   genarateArray.length ?
        
            <div className='cart-container'> 
            <h1>Your Cart</h1>
            {
                genarateArray.map(arrayItem => {
                    const { item, price, qty} = arrayItem;
                    return (
                        <div className='cart-item' key={item._id}>
                         <img alt='productImg' src={item.imagePath} /><h3>{item.name}</h3><h6>${item.price}</h6> <h4><button onClick={()=>onRemoveCart(item._id)}>-</button>{qty}</h4> <h4>${price}</h4>
                        </div>
                        
                    )

                })
            }
            <h2>Total Price: ${cart.totalPrice}</h2>
            <Link to="/checkout"><button id='payment-btn'>Proceed To Checkout</button></Link>
            </div>
        
        :

        <div className='cart-container'> 
            <h1>Your Cart Is Empty</h1>
            <Link to="/shop"><button id='payment-btn'>Go To Shop</button></Link>
            
        </div>
 
    }
        <Footer />
        </div>
        )
       
    
}

export default Cart;