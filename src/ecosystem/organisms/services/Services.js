import React from 'react';
import { ImgType } from '../../../enums/ImgType';
import ImgList from '../../molecules/imgList/ImgList';

const Services = ({ setShow, close, setShownType }) => {
    return (
        <div className='my-2'>
            <ImgList id={ImgType.services} setShow={setShow} close={close} setShownType={setShownType}/>
        </div>
    );
};

export default Services;