import React from 'react';

import '../styles/HeaderStart.scss';

const HeaderStart = ({ children, Title, Desc }) => {
    return(
        <div className='header-start'>
            <p className='header-title'>{Title}</p>
            <small className='header-desc'>{Desc}</small>
            {children}
        </div>
    );
}

export default HeaderStart;