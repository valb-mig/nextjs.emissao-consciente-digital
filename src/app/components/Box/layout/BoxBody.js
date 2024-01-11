import React from 'react';

import '../styles/BoxBody.scss';

const BoxBody = ({ Icon, Desc, Class}) => {
    return(
        <div className={"box-body p-2 "+Class}>
            <i className='m-2'>{Icon}</i>
            <p>{Desc}</p>
        </div>
    );
}

export default BoxBody;