import React, {Component} from 'react';
import Footer from '../Footer/Footer';
import { Redirect, Link } from 'react-router-dom'
import './Checkout.css'
import ScrollToTop from '../ScrollToTop/ScrollToTop';


import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  
    this.state = {
        complete: false,
        name: '',
        address: '',
        city: ''

    };

  }

   submit(ev) {
       const { name, address, city } = this.state;
       if( name === '' || address === '' || city === '') {
           alert('You should not leave empty fields')
       } else {
    this.props.stripe.createToken({name:this.state.name})
    .then(data => {
        if(data.error) {
            alert(data.error.message)
        } else {
            fetch("https://murmuring-crag-50531.herokuapp.com/charge", {
                method: "POST",
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify({
                amount: this.props.cart.totalPrice,
                chargeToken: data.token.id,
                name: name,
                address: address,
                city: city,
                cart: this.props.cart,
                user: this.props.user

              })
              })
              .then(response => {
                  console.log(response)
                if (response.ok) {
                    alert('Purchase Complete')
                    this.setState({complete: true})
                    this.props.emptyCart();
                }else if (response.msg) {
                    alert(response.msg)
                }
                 else{
                    console.log(response)
                    alert("Your card number is valid, but since this is a test mode the transaction will not be executed. For payment testing, vist https://stripe.com/docs/testing and fill one of the credit card examples.")
                };
              })
        }
    })

}
  }



onNameChange = (event) => {
    this.setState({name: event.target.value})
}

onAddressChange = (event) => {
    this.setState({address: event.target.value})
}

onCityChange = (event) => {
    this.setState({city: event.target.value})
}


  render() {
    if (this.state.complete) return <Redirect to="/" />;
    if (!this.props.isLogedIn) return (
        <div>
    <h1 id='log-in-msg'> You Should Be Logged In In Order To Checkout </h1>
    <div id='links-con'>
    <Link to='/signin'><h5>Login</h5></Link>
    <Link to='/register'><h5>Register</h5></Link>
    </div>
    <Footer />
    </div>
    )
    return (

        <div>
        <ScrollToTop />
        <div className='checkout-container'>
            <h1>Checkout</h1>
            <h3>Your Total: ${this.props.cart.totalPrice}</h3>
            <div className="row">
            <div className="col-75">
                <div className="container">
                    <div className="row">
                    <div className="col-50">
                        <h3>Billing Address</h3>
                        <label ><i className="fa fa-user"></i> Full Name</label>
                        <input type="text" id="fname" name="name"  required onChange={this.onNameChange}/>
                        <label ><i className="fa fa-address-card-o"></i> Address</label>
                        <input type="text" id="adr" name="address" onChange={this.onAddressChange} required/>
                        <label ><i className="fa fa-institution"></i> City</label>
                        <input type="text" id="city" name="city" onChange={this.onCityChange} required/>
                        </div>
                    </div>

                    <div className="checkout">
                        <h3>Payment</h3>
                        <CardElement  />
                    </div>
                    
                    <button onClick={this.submit}  className="btn"> Buy Now </button>
                </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>

    
    );
  }
}

export default injectStripe(CheckoutForm);

