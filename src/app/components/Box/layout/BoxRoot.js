import React from 'react';

import '../styles/BoxRoot.scss';

const BoxRoot = ({ children }) => {
    return(
        <div className="box">
            {children}
        </div>
    );
}

export default BoxRoot;