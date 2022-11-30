import React from 'react';
import Img from '../../atoms/img/Img';
import { ImgArray } from './ImgArray';

const ImgList = ({id, setShow, setShownType}) => {

    return (
        <div className='flex-bet flex-wrap'>
            {ImgArray.filter(item => item.id === id).map((data, index) => {
                return (
                    <div className='img-square-container relative my-1' onClick={() => {setShow(); setShownType(data.imgIdentifier)}} key={index}>
                        <Img url={data.url} alt={data.alt} stl='width-1 center-ver'/>
                        {data.name !== '' ?
                            <div className='txt-over'>
                                <p className='center-ver'>{data.name}</p>
                            </div>
                            : null
                        }
                    </div>
                )
            })}

        </div>
    );
};

export default ImgList;