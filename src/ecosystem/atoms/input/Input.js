// Name: Sofia Nunes 
// Date: 30-11-2022
// Motive: input general component

import React from 'react';
import { TextField, ThemeProvider } from '@mui/material';
import { InputsArray } from './InputArray';
import { colorTheme } from './Input_M';


const Input = ({change, id, stl}) => {
    return (
        <>
            {InputsArray.filter(data => data.id === id).map((item, index) => {
                return ( 
                    <div key={index} className='mb-1'>
                        <ThemeProvider theme={colorTheme}>
                            <TextField 
                                type={item.type}
                                spellCheck="false"
                                name={item.name}
                                id={item.name}
                                label={item.name}
                                variant="outlined"
                                className={stl}
                                placeholder={item.placeholder}
                                multiline={item.name === 'Mensagem' ? true : false}
                                maxRows={item.name === 'Mensagem' ? 8 : null}
                                rows={item.name === 'Mensagem' ? 4 : null}
                                onChange={change}           
                            /> 
                        </ThemeProvider>
                    </div>  
                )
            })}
        </>
    );
};

export default Input;