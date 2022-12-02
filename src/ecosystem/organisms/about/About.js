import React from 'react';
import Text from '../../atoms/text/Text';

const About = ({currRef}) => {

    const innerWidth = window.innerWidth;

    return (
        <div className='my-2' ref={currRef}>
           <Text txt='Bem vindo à Restore It' stl={innerWidth > 600 ? 'xx-medium width-1 p-0 m-0': 'x-medium width-1 p-0 mt-25'}/> 
           <Text txt='A Restore It é um pequeno atelier de restauro de documentos gráficos, que promove a salvaguarda do património cultural, concretamente dos documentos gráficos. As intervenções de restauro praticadas na Restore It utilizam materiais estáveis e reversíveis, respeitando a autenticidade e integridade das obras.' stl={innerWidth > 600 ? 'mt-1 line-height-1' : 'mt-25 line-height-2'}/> 
        </div>
    );
};

export default About;