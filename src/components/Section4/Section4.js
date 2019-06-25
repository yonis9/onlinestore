import React from 'react';
import leaf from '../../images/leaf.png';
import smell from '../../images/wind.png';
import usa from '../../images/usa.png';
import './Section4.css';

const Section4 = () => {
    return (
        <div className='sec4'>
            <div className='pros-con'>
            <div className='pros'><img src={leaf} alt='leaf'/>
            <p>All Natural Ingredients</p></div>
            <div className='pros'><img src={smell} alt='smell'/>
            <p>Great Smell</p></div>
            <div className='pros'><img src={usa} alt='usa' />
            <p>Made In USA</p></div>              
            </div>
            <div id='quote'>
                <h1>"The Tree Ranger is one of the best beard oils you can find, no doubt. It gets the balance between nourishing, styling and texture just right."</h1>
                <h2>-The Manliness Kit</h2>
            </div>
        </div>
    )
}

export default Section4;