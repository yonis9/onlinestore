import React from 'react';
import SlideShow from '../SlideShow/SlideShow';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ( { winWidth } ) => {
    return (<div>
        { winWidth > 760 ?
        <div className='header-con'>
            <div className='text'>
                <h1>KEEP ON GROWING</h1>
                <p>At Beardbrand, we have a mission to do more than deliver excellent products. We also focus on providing a wide variety of tools that men need to invest in themselves. Those tools include education, inspiration, and an incredible community. When a man invests in himself, he then has the power to invest in his family, his friends, his career, and his community. Amazingly, self investment can start with a simple grooming routine and ultimately lead to a better world. </p>
                <p><strong>Our Mission:</strong> To Make Men Look & Feel Awesome.</p>
                <Link to="/shop"><button>SHOP NOW</button></Link>
            </div> 
            <div className='slide-con'>
            <SlideShow />
            </div>
        </div>
        :
        <div className='moobile-sec1'> 
        <div className='brand-logo'>
        <img src='https://cdn.shopify.com/s/files/1/0209/0478/t/102/assets/logo.png?8912' alt='brand-logo'/>
        </div>
        <img src='https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/48368768_1927263817370723_5472541169856544768_n.jpg?_nc_cat=110&_nc_ht=scontent.fhfa1-1.fna&oh=ef627e1881908eb0c1401ca305bf2123&oe=5D57E05B' alt='header' />
        <div id='text-mobile'><h4>HIGH QULITY BEARD PRODUCTS</h4>
        <Link to="/shop"><button>SHOP NOW</button></Link>
        </div>
    </div>
    }
    </div>
    )
}

export default Header;