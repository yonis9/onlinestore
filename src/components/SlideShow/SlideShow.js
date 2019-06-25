import React from 'react';
import { Fade } from 'react-slideshow-image';
import './SlideShow.css';
 
const fadeImages = ['https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/48368768_1927263817370723_5472541169856544768_n.jpg?_nc_cat=110&_nc_ht=scontent.fhfa1-1.fna&oh=ef627e1881908eb0c1401ca305bf2123&oe=5D57E05B',
    
 'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/57882391_2113773845386385_5992161178208436224_n.jpg?_nc_cat=110&_nc_ht=scontent.fhfa1-1.fna&oh=fdc8a490946eec1a5225153511a68d35&oe=5D5F4B4C',
 'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/14947900_1109293879167725_1476467407861272423_n.jpg?_nc_cat=110&_nc_ht=scontent.fhfa1-1.fna&oh=085a1ca06737eeb8a8ce037983ed0651&oe=5D9B0347',
 'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/28168575_1560776160686159_4404262026656353943_n.jpg?_nc_cat=103&_nc_ht=scontent.fhfa1-1.fna&oh=f10302787a6d2b272b9afa554922126a&oe=5D56A510',
  'https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/10805543_699331970163920_5146195338041597376_n.png?_nc_cat=104&_nc_ht=scontent.fhfa1-2.fna&oh=7c12417afb311c819d4f412be56235a7&oe=5D910D40',
'https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/59301670_2124409427656160_8427190369824800768_n.jpg?_nc_cat=101&_nc_ht=scontent.fhfa1-2.fna&oh=9a2e1810e07bc3c749972339e9e90f38&oe=5D5B262B',

];

 
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