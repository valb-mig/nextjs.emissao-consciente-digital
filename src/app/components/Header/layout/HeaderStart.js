import React from 'react';

import '../styles/HeaderStart.scss';

const HeaderStart = ({ children, Title }) => {
    return(
        <div>
            <p>{Title}</p>
            {children}
        </div>
    );
}

export default HeaderStart;