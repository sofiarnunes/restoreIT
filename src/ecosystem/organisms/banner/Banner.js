import React from 'react';
import BannerImg from '../../../assets/img/banner.jpg';
import Img from '../../atoms/img/Img';
import FilledText from '../../atoms/text/FilledText';

const Banner = () => {
    return (
        <div className='banner-img-container relative'>
            <Img url={BannerImg} stl='width-1'/>
            <div className='absolute' style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <FilledText txt='Eternal memories' fillColor='#D99F84' stl='txt-primary uppercase large  font-title-medium letter-space-5 txt-center'/>
                <FilledText txt='A arte do restauro de papel' fillColor='rgba(0, 0, 0, 0.7)' stl='white uppercase small letter-space-5 txt-center' stlFill='mt-05'/>
            </div>
        </div>
    );
};

export default Banner;