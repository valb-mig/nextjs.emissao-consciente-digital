import React from 'react';

import '../styles/CardRoot.scss';

const CardRoot = ({ children }) => {
    return(
        <div className='card-box'>
            {children}
        </div>
    );
}

export default CardRoot;