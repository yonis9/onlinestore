import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Elements, StripeProvider} from 'react-stripe-elements';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/Checkout/Checkout'
import Navbar from './components/Navbar/Navbar';
import Mobilebar from './components/Mobilebar/Mobilebar';
import Backdrop from './components/Backdrop/Backdrop';
import Product from './components/Product/Product';
import RouteHistory from './components/RouteHistory/RouteHistory';
import './App.css';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Profile from './components/Profile/Profile'
import Error from './components/Error/Error';
require('dotenv').config()

class App extends Component {
  constructor() {
    super()
    this.state = {
        winWidth: window.innerWidth,
        isMenuOpen: false,
        mobileRouteChange: false,
        isLogedIn: Boolean(JSON.parse(window.sessionStorage.getItem('user'))),
        user:  JSON.parse(window.sessionStorage.getItem('user')) || {},
        redirect: false,
        cart: JSON.parse(window.sessionStorage.getItem('cart')) || {},
        genarateArray: [],
        randProducts: []
        
}
}

componentDidMount() {
  this.generateProducts();
  const sessionCart = JSON.parse(window.sessionStorage.getItem('cart'));
    window.addEventListener('resize', () => {
      this.setState({ winWidth: window.innerWidth})
   });
   Object.entries(this.state.cart).length ? this.setState({genarateArray: this.genarateArray(sessionCart)})
  : this.setState({genarateArray: [] })
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.mobileRouteChange === true) {
      this.setState({mobileRouteChange: false});
    }
    if (prevState.redirect === true) {
      this.setState({redirect: false})
    }
    if (prevState.isMenuOpen === true) {
      this.setState({isMenuOpen: false})
    }
  }

  emptyCart = () => {
    window.sessionStorage.removeItem('cart');
    this.setState({cart: {}, genarateArray: []})

  }

  generateProducts = () => {
    fetch(`https://murmuring-crag-50531.herokuapp.com/shop/All`)
    .then(response => response.json())
    .then(data => {
      let arr = [];
      for(let i=0; i<3; i++) {
        let  rand = Math.floor(Math.random() * Math.floor(data.length))
        arr.push(data[rand])
      }
      this.setState({randProducts: arr})
  })
}
  

  onAddToCart = (id) => {
    fetch(`https://murmuring-crag-50531.herokuapp.com/add-to-cart/${id}`, {
        method: 'post',
        headers:{"Content-Type": 'application/json', 'Requested-With': 'XMLHttpRequest'},
  body: JSON.stringify({
    cart:  JSON.parse(window.sessionStorage.getItem('cart')) || {}
  })
    })
    .then(response => response.json())
    .then(cart => {
        window.sessionStorage.setItem('cart', JSON.stringify(cart))
    this.setState({cart, genarateArray: this.genarateArray(cart)})
    })

}

onRemoveCart = (id) => {
    fetch(`https://murmuring-crag-50531.herokuapp.com/cart/remove-item/${id}`, {
        method: 'post',
        headers:{"Content-Type": 'application/json', 'Requested-With': 'XMLHttpRequest'},
  body: JSON.stringify({
    cart:  JSON.parse(window.sessionStorage.getItem('cart')) || {}
  })
    })
    .then(response => response.json())
    .then(cart => {
        window.sessionStorage.setItem('cart', JSON.stringify(cart))
    this.setState({cart, genarateArray: this.genarateArray(cart)})
    })


}


 genarateArray = (cart) => {
  let arr = [];
  for (let id in cart.items) {
      arr.push(cart.items[id]);
  }
  return arr;
}

  onMobileRouteChange = () => {
    this.setState({mobileRouteChange: true, isMenuOpen: false});
 
  }
  onMenuClick = () => {
    this.setState((prevState) => {
      return {isMenuOpen: !prevState.isMenuOpen}
    });
  }

  loadUser = (data) => {
    window.sessionStorage.setItem('user', JSON.stringify(data.user))
    this.setState({isLogedIn: true, user: data.user, redirect: true})
  }

  logOut = () => {
    window.sessionStorage.removeItem('user')
    this.setState({isLogedIn: false, user: {}, redirect: true})
  }

  render() {
    const { winWidth, isMenuOpen, MobileRouteChange, isLogedIn, redirect, user, cart, genarateArray, randProducts} = this.state;
    let backdrop;

    if(isMenuOpen) {
      backdrop= <Backdrop onMenuClick={this.onMenuClick} MobileRouteChange={MobileRouteChange}/>
    }
    return (
        <BrowserRouter>
          <Navbar winWidth={winWidth} isLogedIn={isLogedIn} onMenuClick={this.onMenuClick} name={user.name} qty={cart.totalQty} logOut={this.logOut} />
          <Mobilebar isMenuOpen={isMenuOpen} isLogedIn={isLogedIn} name={user.name} qty={cart.totalQty} logOut={this.logOut}/>
         {backdrop}
      
           <RouteHistory onMobileRouteChange={this.onMobileRouteChange}/>
           <Switch>
            <Route path='/' exact render={(routeProps) => (<Home {...routeProps} winWidth={winWidth} onAddToCart={this.onAddToCart} randProducts={randProducts}/>)} />
            <Route path='/shop' render={(routeProps) => (<Shop {...routeProps} onAddToCart={this.onAddToCart} />)} />
            <Route path='/cart' render={(routeProps) => (<Cart {...routeProps} cart={cart} genarateArray={genarateArray} onRemoveCart={this.onRemoveCart} />)}  />
            <Route path='/profile' render={(routeProps) => (<Profile {...routeProps} user={user} isLogedIn={isLogedIn} genarateArray={this.genarateArray}/>)}  />
            <Route path='/register'  render={(routeProps) => (<Register {...routeProps} loadUser={this.loadUser} redirect={redirect} />)} />
            <Route path='/signin' render={(routeProps) => (<Signin {...routeProps} loadUser={this.loadUser} redirect={redirect} />)}/>
            <Route path='/product/:id' render={(routeProps) => (<Product {...routeProps}  onAddToCart={this.onAddToCart} />)} />
            <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PK_KEY}>
            <Elements>
            <Route path='/checkout' render={(routeProps) => (<CheckoutForm {...routeProps} cart={cart} genarateArray={genarateArray}  emptyCart={this.emptyCart} user={user} isLogedIn={isLogedIn}/>)}/>
          </Elements>
          </StripeProvider>
          <Route component={Error} />
          </Switch>
        </BrowserRouter>
    
    );
  }
}

export default App;
