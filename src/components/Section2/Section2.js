import React from 'react';
import './Section2.css';
import { Link } from 'react-router-dom';
import wash from '../../images/wash.jpg';
import oil from '../../images/oil.jpg';

const Section2 = () => {
    return (
    <div id='sec2'>
        
        <div className='image-con'>
        <Link to={{pathname: `/shop/`, state: {category: 'Beard Oil'}}}>
         <img src={oil} alt='beard-oils' />
        <h3>Beard oils</h3>
        </Link>
        </div>
        
        
        <div className='image-con'>
        <Link to={{pathname: `/shop/`, state: {category: 'Beard Wash & Softener'}}}>
         <img src={wash} alt='beard-washes' />
         <h3>Beard Wash & Softener</h3>
         </Link>
        </div>
       
    </div>
    )
}

export default Section2;