import React from 'react';
import { ButtonType } from '../../../enums/ButtonType';
import { FormType } from '../../../enums/FormType';
import Btn from '../../atoms/btn/Btn';
import Input from '../../atoms/input/Input';
import Text from '../../atoms/text/Text';

const Contact = ({currRef}) => {
    return (
        <div className='mt-2 mb-1' style={{width: '50%', position: 'relative', left: '50%', transform: 'translate(-50%)'}} ref={currRef}>
            <Text txt='Contacte-nos' stl='x-medium mb-05'/> 
            <Text txt='Preencha o formulário e entraremos em contacto brevemente.' stl='small mb-2'/> 
            <Input id={FormType.contactForm} stl='width-1'/> 
            <Btn id={ButtonType.baseLightBtn} txt='Enviar'/>
        </div>
    );
};

export default Contact;