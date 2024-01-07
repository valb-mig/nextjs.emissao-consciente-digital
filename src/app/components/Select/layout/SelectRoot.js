import React from 'react';

import '../styles/SelectRoot.scss';

const SelectRoot = ({ Placeholder, Options, OnChange, Value }) => {
    return(
        <select 
            className='form-control' 
            onChange={(e) => OnChange(e)}
            value={Value}
        >

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