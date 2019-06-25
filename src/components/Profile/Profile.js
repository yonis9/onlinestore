import React, { Component } from 'react';
import './Profile.css';
import Footer from '../Footer/Footer'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading : true,
            orders: []
        }
    }

    componentDidMount() {
        fetch('https://murmuring-crag-50531.herokuapp.com/getOrders', {
            method: 'post',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({user: this.props.user})
        }).then(response => response.json())
        .then(data => {
           data.map(order => {
            return  order['cart'] = this.props.genarateArray(order.cart)
            });
            this.setState({orders: data, isLoading: false})
            
        })
        
        
    }

    render() {
        if (!this.props.isLogedIn) return (    <div className='profile-con'>
        <h1>You Should Log In To See Your Profile</h1>
        </div>)
const { orders, isLoading } = this.state;
        return (
            <div>
                <div className='profile-con'>
                    <h1>Hello, {this.props.user.name}</h1>
                   
                   {
                       isLoading ?
                       <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                       :
                    
                     !orders.length 
                    ? <h3 id='no-orders'>You Have No Orders Yet</h3>
                    : <h3>Your Orders:</h3>
                    }
                    { 
                    orders.map((order, index )=> {
                        return (
                            <div className='order-con' key={index}>
                                <div className='order-header'>
                                <h4>{order.date}</h4>
                                < h4>${order.totalPrice}</h4>
                                </div>
                                <div className='order-cart-container'>
                                {
                                                    order.cart.map((arrayItem, i) => {
                                                        const { item, price, qty} = arrayItem;
                                                        return (
                                                            <div className='order-cart-item' key={i}>
                                                             <img alt='productImg' src={item.imagePath} /><h5>{item.name}</h5><h5>${item.price}</h5> <h5>{qty}</h5> <h5>${price}</h5>
                                                            </div>
                                                            
                                                        )
                                    
                                                    })
                                }
                                </div>
                            </div>
                        )
                    })
                }
                    


                </div>
                <Footer />
            </div>
        )
    }
}

export default Profile;