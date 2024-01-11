import React from 'react';

import '../styles/HeaderRoot.scss';

const HeaderRoot = ({ children }) => {
    return(
        <header className="header text-black text-center py-2 px-3 d-flex justify-content-between">
            {children}
        </header>
    );
}

export default HeaderRoot;