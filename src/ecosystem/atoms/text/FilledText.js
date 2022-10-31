// Name: Sofia Nunes 
// Date: 22-10-2022
// Motive: filled text general component with dinamic text and styling based on props

import React from 'react';


const FilledText = ({ stl, txt, fillColor, stlFill }) => {
    return (
        <div style={{backgroundColor: fillColor, padding: '0.5rem 2rem'}} className={stlFill}>
            <p className={stl}>{txt}</p>
        </div>
    );
};

export default FilledText;