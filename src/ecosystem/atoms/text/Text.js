// Name: Sofia Nunes 
// Date: 11-07-2022
// Motive: text general component with dinamic text and styling based on props

import React from 'react';


const Text = ({ stl, txt }) => {
    return (
        <>
            <p className={stl}>{txt}</p>
        </>
    );
};

export default Text;