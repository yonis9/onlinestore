import React from 'react';
import './Backdrop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Backdrop = ( { onMenuClick , MobileRouteChange}) => {
    return (
        <div className='backdrop' onClick={onMenuClick}>
            <span id='x'><FontAwesomeIcon icon="times" /></span>
        </div>
    )
    
}

export default Backdrop;