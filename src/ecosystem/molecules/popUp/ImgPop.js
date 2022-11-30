// Name: Sofia Nunes 
// Date: 30-11-2022
// Motive: image popup component 

import React from 'react';
import Img from '../../atoms/img/Img';

const ImgPop = ({url}) => {
    return (
        <div>
            <Img url={url}/>
        </div>
    );
};

export default ImgPop;