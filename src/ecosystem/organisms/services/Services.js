import React from 'react';
import { ImgType } from '../../../enums/ImgType';
import Text from '../../atoms/text/Text';
import ImgList from '../../molecules/imgList/ImgList';

const Services = ({ setShow, close, setShownType, currRef }) => {
    return (
        <div className='my-2' ref={currRef} >
            <Text txt='Serviços' stl='x-medium mb-05'/> 
            <ImgList id={ImgType.services} setShow={setShow} close={close} setShownType={setShownType}/>
        </div>
    );
};

export default Services;