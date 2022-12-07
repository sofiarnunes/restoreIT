import React, { useEffect } from 'react';
import { ButtonType } from '../../../enums/ButtonType';
import { FormType } from '../../../enums/FormType';
import Btn from '../../atoms/btn/Btn';
import Input from '../../atoms/input/Input';
import Text from '../../atoms/text/Text';

const Contact = ({currRef, alert, setAlert}) => {

    const innerWidth = window.innerWidth;

    useEffect(() => {
        if(alert) {
            setTimeout(() => {
                setAlert(false);
            }, 5000);
        } 
    }, [alert]);

    return (
        <div className='mt-2 mb-1' style={innerWidth > 600 ? {width: '50%', position: 'relative', left: '50%', transform: 'translate(-50%)'} : {width: '100%', position: 'relative', left: '50%', transform: 'translate(-50%)'}} ref={currRef}>
            <Text txt='Contacte-nos' stl='x-medium mb-05'/> 
            <Text txt='Preencha o formulário e entraremos em contacto brevemente.' stl='small mb-2'/> 
            <Input id={FormType.contactForm} stl='width-1'/> 
            <Btn id={ButtonType.baseLightBtn} txt='Enviar' use={() => setAlert(true)}/>
        </div>
    );
};

export default Contact;