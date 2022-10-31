// Name: Sofia Nunes 
// Date: 03-10-2022
// Motive: img element with dynamic styling based on props

import React from 'react';


const Img = ({ url, stl, alt }) => {
    return (
        <>
            <img className={stl} alt={alt} src={url}/>
        </>
    );
};

export default Img;