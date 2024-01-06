import React from 'react';

import '../styles/ButtonRoot.scss';

const ButtonRoot = ({ Type, Class, Title }) => {
    return(
        <button className={`btn ${Class}`} type={Type}>
            {Title}
        </button>
    );
}

export default ButtonRoot;