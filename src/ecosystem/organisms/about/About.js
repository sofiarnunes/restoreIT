import React from 'react';
import Text from '../../atoms/text/Text';

const About = ({currRef}) => {
    return (
        <div className='my-2' ref={currRef}>
           <Text txt='Bem vindo à Restore It' stl='xx-medium'/> 
           <Text txt='A Restore It é um pequeno atelier de restauro de documentos gráficos, que promove a salvaguarda do património cultural, concretamente dos documentos gráficos. As intervenções de restauro praticadas na Restore It utilizam materiais estáveis e reversíveis, respeitando a autenticidade e integridade das obras.' stl='mt-1 line-height-1'/> 
        </div>
    );
};

export default About;