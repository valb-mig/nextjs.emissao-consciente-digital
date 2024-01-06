import React from 'react';

import '../styles/FormRoot.scss';

const FormRoot = ({ children, OnSubmit, Class }) => {
    return(
        <form onSubmit={OnSubmit} className={Class}>
            {children}
        </form>
    );
}

export default FormRoot;