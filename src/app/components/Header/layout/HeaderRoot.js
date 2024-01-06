import React from 'react';

import '../styles/HeaderRoot.scss';

const HeaderRoot = ({ children }) => {
    return(
        <header className="bg-light text-black text-center py-3 d-flex justify-content-between">
            {children}
        </header>
    );
}

export default HeaderRoot;