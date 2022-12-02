import React from 'react';
import { Button } from '@mui/material';
import { useBtn } from './Btn_M';
import { BtnArray } from './BtnArray';

const Btn = ({id, disabled, use, txt, stl}) => {

    const classes = useBtn();

    return (
        <>
            {BtnArray.filter(data => data.id === id).map((item, index) => {
                return (
                    <div key={index} className={`btn-box ${classes.btn} ${stl} `}>
                        <Button className={`width-1 small ${item.style} p-1`} variant="contained" onClick={() => use()} disabled={disabled}>{txt}</Button>
                    </div>
                )
            })}

        </>
    );
};

export default Btn;