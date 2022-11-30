// Name: Sofia Nunes 
// Date: 22-10-2022
// Motive: popup component with dynamic styling based on props

import React from 'react';
import { IconType } from '../../../enums/IconType';
import Icon from '../../atoms/icon/Icon';
import Img from '../../atoms/img/Img';
import Text from '../../atoms/text/Text';
import { ImgArray } from '../imgList/ImgArray';

const PopUp = ({ close, content, urlSelected }) => {
    
    return (
        <div style={{width: '100%', height: '100vh', position: 'fixed', top: '0', left: '0', backgroundColor:'rgba(33, 37, 41, 0.8)', zIndex: '10000000'}}>
            <div style={{position: 'absolute', right: '2rem', top: '1.5rem', zIndex: '1000'}}>
                <Icon id={IconType.closeIcon} use={close} color='#fff'/>
            </div>
            {urlSelected.length ?
                <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '35%'}}>
                    <Img url={urlSelected} stl='width-1'/>
                    <div className='width-1 p-05' style={{backgroundColor: 'rgba(255, 255, 255, 0.6)', position: 'absolute', bottom: '1px'}}>
                        <Text txt={`${ImgArray.filter(item => item.url === urlSelected)[0].title} - ${ImgArray.filter(item => item.url === urlSelected)[0].subtitle}`} stl='bold'/>
                    </div>
                </div>
            :
                <div className='popup-round' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40%', overflowY: 'scroll'}}>
                    <div>
                        {content}
                    </div>
                </div>
            }

        </div>
    );
};

export default PopUp;