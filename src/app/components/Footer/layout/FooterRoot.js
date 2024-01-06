import React from 'react';

import '../styles/FooterRoot.scss';

const FooterRoot = ({ children }) => {
    return(
        <footer className='bg-dark text-white'>
            {children}
        </footer>
    );
}

export default FooterRoot;