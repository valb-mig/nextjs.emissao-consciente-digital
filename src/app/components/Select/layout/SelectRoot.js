import React from 'react';

import '../styles/SelectRoot.scss';

const SelectRoot = ({ Placeholder, Options }) => {
    return(
        <select className='form-control'>

            <option value="">
                {Placeholder}
            </option>

            {Options.map((option) => (
            <option key={option.indice} value={option.indice}>
                {option.nome}
            </option>
            ))}

        </select>
    );
}

export default SelectRoot;