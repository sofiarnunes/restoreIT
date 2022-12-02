import { Box } from '@mui/system';
import React from 'react';
import BannerImg from '../../../assets/img/banner.jpg';
import Img from '../../atoms/img/Img';
import FilledText from '../../atoms/text/FilledText';

const Banner = () => {

    const innerWidth = window.innerWidth;

    return (
        <Box className='banner-img-container relative' sx={{ height: { md: '50vh', xs: '75vh' } }}>
            <Img url={BannerImg} stl={innerWidth > 600 ? 'width-1' : null}/>
            <div className='absolute' style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '95%'}}>
                <FilledText txt='Eternal memories' fillColor='#D99F84' stl={innerWidth > 600 ? 'txt-primary uppercase large font-title-medium letter-space-5 txt-center' : 'txt-primary uppercase  font-title-medium letter-space-5 txt-center p-0'}/>
                <FilledText txt='A arte do restauro de papel' fillColor='rgba(0, 0, 0, 0.7)' stl={innerWidth > 600 ? 'white uppercase small letter-space-5 txt-center' : 'white uppercase x-small letter-space-5 txt-center'} stlFill='mt-05'/>
            </div>
        </Box>
    );
};

export default Banner;