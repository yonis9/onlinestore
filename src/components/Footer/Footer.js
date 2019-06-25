import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className='footer'>
                <div className='beard-social'>
                <div className='icon-container'>
                <a href='https://www.instagram.com/beardbrand/' target='_blank' rel="noopener noreferrer"> <div className='icon-social'>
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </div></a>
                <a href='https://www.facebook.com/Beardbrand' target='_blank' rel="noopener noreferrer"> <div className='icon-social'>
                <FontAwesomeIcon icon={['fab', 'facebook-f']} /> 
                </div></a>
                <a href='https://twitter.com/beardbrand' target='_blank' rel="noopener noreferrer"> <div className='icon-social'>
                <FontAwesomeIcon icon={['fab', 'twitter']} /> 
                </div></a>
                <a href='https://www.youtube.com/c/Beardbrand' target='_blank' rel="noopener noreferrer"> <div className='icon-social'>
                <FontAwesomeIcon icon={['fab', 'youtube']} /> 
                </div></a>
                </div>
                <p id='p1'>For Buying The Real Products Visit: </p>
                <p id='p2'>https://www.beardbrand.com</p>
                </div>
                {/* <div className='line-sp'/> */}
                
                <div className='contact'>
                <div className='icon-container'>
                <a href='https://github.com/yonis9' target='_blank' rel="noopener noreferrer"><div className='icon-social'>
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </div> </a>
                <a href='https://www.linkedin.com/in/yonisisso/' target='_blank' rel="noopener noreferrer">  <div className='icon-social'>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </div></a>
                </div>
                <p>Made With <span role='img' aria-label="heart">❤️</span> By Yoni Sisso</p>
                </div>
            </div>
    )
}

export default Footer;