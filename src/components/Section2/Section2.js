import React from 'react';
import './Section2.css';
import { Link } from 'react-router-dom'

const Section2 = () => {
    return (
    <div id='sec2'>
        
        <div className='image-con'>
        <Link to={{pathname: `/shop/`, state: {category: 'Beard Oil'}}}>
         <img src='https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/11448_446905495406570_629904828_n.jpg?_nc_cat=108&_nc_ht=scontent.fhfa1-2.fna&oh=1d34d17b0b7fcd8e7aaa401711f05f6f&oe=5D8E78A2' alt='beard-oils' />
        <h3>Beard oils</h3>
        </Link>
        </div>
        
        
        <div className='image-con'>
        <Link to={{pathname: `/shop/`, state: {category: 'Beard Wash & Softener'}}}>
         <img src='https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/42503908_1814992348597871_8285086484868890624_n.jpg?_nc_cat=110&_nc_ht=scontent.fhfa1-1.fna&oh=93d65bba54a772ab92fc0924465a453f&oe=5D9065F2' alt='beard-washes' />
         <h3>Beard Wash & Softener</h3>
         </Link>
        </div>
       
    </div>
    )
}

export default Section2;