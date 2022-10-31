// Name: Sofia Nunes 
// Date: 13-07-2022
// Motive: icon element with dynamic usage, styling and features based on props and array info

import React from 'react';
// MUI element
import IconButton from '@mui/material/IconButton';
// Imports
import { IconsArray } from './IconsArray';

const Icon = ({ use, edge, id, color, disabled }) => {

    return (
        <>
            {IconsArray.filter(item => item.id === id).map((data, index) => {
                return (
                    <div key={index} style={{color: color}}>
                        <IconButton
                        color="inherit"
                        aria-label={data.label}
                        onClick={use}
                        edge={edge}
                        disabled={disabled}
                        >
                            {data.icon}
                        </IconButton>
                    </div>
                )
            })}

        </>
    );
};

export default Icon;