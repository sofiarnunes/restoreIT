import React from 'react';
import { ImgType } from '../../../enums/ImgType';
import ImgList from '../../molecules/imgList/ImgList';

const Services = ({ setShow, close }) => {
    return (
        <div className='my-2'>
            <ImgList id={ImgType.services} setShow={setShow} close={close}/>
        </div>
    );
};

export default Services;