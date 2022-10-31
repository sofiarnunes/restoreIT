// Name: Sofia Nunes 
// Date: 22-10-2022
// Motive: popup component with dynamic styling based on props

import React from 'react';
import { IconType } from '../../../enums/IconType';
import Icon from '../../atoms/icon/Icon';
import SwiperComp from '../swiper/SwiperComp';

const PopUp = ({ id, close }) => {
    return (
        <div style={{width: '100%', height: '100vh', position: 'fixed', top: '0', left: '0', backgroundColor:'rgba(33, 37, 41, 0.8)', zIndex: '10000000'}}>
            <div className='popup-round' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40%'}}>
                <div style={{position: 'absolute', right: '2rem', top: '1.5rem'}}>
                    <Icon id={IconType.closeIcon} use={close}/>
                </div>
                <div className='m-1'>
                    <SwiperComp/>
                </div>
            </div>
        </div>
    );
};

export default PopUp;