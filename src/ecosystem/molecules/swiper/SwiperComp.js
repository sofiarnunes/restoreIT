import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { ImgArray } from '../imgList/ImgArray';
import Img from '../../atoms/img/Img';

const SwiperComp = ({ id }) => {

    console.log(ImgArray.filter(data => data.id === id).map(item => item))


    return (
        <Carousel>
            <div className='mt-2' style={{width: '100%', height: '400px', overflow: 'hidden'}}>
                {ImgArray.filter(data => data.id === id).map((item, i) => <Img key={i} url={item.url} alt={item.alt}/> )
                }
            </div>
        </Carousel>
    );
};

export default SwiperComp;