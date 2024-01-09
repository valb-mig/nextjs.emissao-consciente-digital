import React from 'react';

import '../styles/CardBody.scss';

const CardBody = ({ Icon, Text }) => {
    return(
        <div className='card-body'>
            <i>{Icon}</i>
            <p className='card-text'>{Text}</p>
        </div>
    );
}

export default CardBody;