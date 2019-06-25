import React from 'react';
import { NavLink  } from 'react-router-dom';
import './Navbar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faBars, faAngleDown, faUserCircle, faTimes} from '@fortawesome/free-solid-svg-icons';
import  {fab} from '@fortawesome/free-brands-svg-icons';
library.add(faShoppingCart, faUser, faBars, faAngleDown, faUserCircle, faTimes,  fab)


const Navbar =({ winWidth, onMenuClick, isLogedIn, name, qty, logOut }) => {
    return ( winWidth > 760 ?
<nav className="menu">
  <span className="logo">
            <img src='https://cdn.shopify.com/s/files/1/0209/0478/t/102/assets/logo.png?8912' alt='logo'/>
  </span>
  
  
  <ol className='leftnav'>
  
    <li className="menu-item"><NavLink to="/"><span className='link'>Home</span></NavLink></li>
    <li className="menu-item"><NavLink to="/shop"><span className='link'>Shop</span></NavLink></li>
  </ol>
  
  
< ul className='right'>  

        <li className="menu-item"><NavLink  to="/cart"><span className='link'><FontAwesomeIcon icon="shopping-cart" /> Your Cart {qty ? <span id='qty'>{qty}</span> : <span></span>}</span></NavLink ></li>
        
        
        
              
           { isLogedIn ? 
           <li className="menu-item"><span className='link'><FontAwesomeIcon icon="user" /> {name}<FontAwesomeIcon icon="angle-down"/></span>
           <ol className="sub-menu">
           <li className="sub-menu-item"><NavLink  to="/profile"><span className='link'>User Account</span></NavLink ></li>
           <li className="sub-menu-item"><NavLink  to="/"><span className='link' onClick={logOut}>Logout</span></NavLink ></li>
           </ol>
           </li>
           :
           <li className="menu-item"><span className='link'><FontAwesomeIcon icon="user" /> User Managemant <FontAwesomeIcon icon="angle-down"/></span>
           <ol className="sub-menu">
           <li className="sub-menu-item"><NavLink  to="/signin"><span className='link'>Login</span></NavLink ></li>
           <li className="sub-menu-item"><NavLink  to="/register"><span className='link'>Register</span></NavLink ></li>
           </ol>
          

        </li>}
        </ul>

  
  
  <span className="bar"></span>


</nav>

: <nav className='smmenu'>
  <div id='menu-icon' onClick={onMenuClick}><span className='sm-menu-icon'><FontAwesomeIcon icon="bars"/></span></div>
  <span className="sm-logo">
            <img src='https://cdn.shopify.com/s/files/1/0209/0478/t/102/assets/logo.png?8912' alt='logo' />
  </span>
    <ul>
      <li id='cart-icon'><NavLink to="/cart"><span className='sm-menu-icon'><FontAwesomeIcon icon="shopping-cart" />{qty ? <span id='qty'>{qty}</span> : <span></span>}</span></NavLink></li>
    </ul>
  </nav>

      
    )
    
}

export default Navbar;