import React from 'react';
import { Fade } from 'react-slideshow-image';
import './SlideShow.css';

import s1 from '../../images/s1.jpg';
import s2 from '../../images/s2.jpg';
import s3 from '../../images/s3.jpg';
import s4 from '../../images/s4.jpg';
import s5 from '../../images/s5.jpg';
import s6 from '../../images/s6.jpg';
 
const fadeImages = [s1, s2, s3, s4, s5, s6];

 
const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false
  }
   
  const SlideShow = () => {
    return (
      <Fade {...fadeProperties} style={{width: '400px'}}> 
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt='fade1' />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt='fade2' />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt='fade3'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} alt='fade4'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} alt='fade5'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[5]} alt='fade6' />
          </div>
        </div>
      </Fade>
    )
  }

export default SlideShow;