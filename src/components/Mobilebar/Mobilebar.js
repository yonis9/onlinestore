import React from 'react';
import './Mobilebar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Mobilebar = ({ isMenuOpen, MobileRouteChange, isLogedIn, name, qty, logOut}) => {
    let classes = 'mobile';
    if(isMenuOpen) {
        classes = 'mobile open'
    }
return (
    <div className={classes}>
      <div className='m-header'>
      <span className='user-circle'><FontAwesomeIcon icon="user-circle"/></span>
      {
        isLogedIn 
        ? <h1>Hello, {name}</h1>
        : <h1>Hello, Guest</h1>
      }
      
      </div>
<nav className="mmenu">
  
  <ol>
  
    <li className="mmenu-item"><NavLink  to="/" ><span className='mlink' >Home</span></NavLink ></li>
    <li className="mmenu-item"><NavLink to="/shop"><span className='mlink'>Shop</span></NavLink></li>
    
    
      
        <li className="mmenu-item"><NavLink  to="/cart"><span className='mlink'> Cart {qty ? <span id='qty'>{qty}</span> : <span></span>}</span></NavLink ></li>
    
{          isLogedIn ?   
        <ol>
        <li className="mmenu-item"><NavLink  to="/profile"><span className='mlink'>Profile</span></NavLink ></li>
        <li className="mmenu-item"><NavLink  to="/"><span className='mlink' onClick={logOut}>Logout</span></NavLink ></li>
      </ol>
      :
      <ol>
      <li className="mmenu-item"><NavLink  to="/signin"><span className='mlink'>Login</span></NavLink ></li>
      <li className="mmenu-item"><NavLink  to="/register"><span className='mlink'>Register</span></NavLink ></li>
      </ol>
    }
       
    


  </ol>
  
  
  <span className="bar"></span>


</nav>

</div>
)

}

export default Mobilebar;