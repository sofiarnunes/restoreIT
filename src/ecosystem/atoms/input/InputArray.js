// Name: Sofia Nunes 
// Date: 30-11-2022
// Motive: array component with all the inputs in the app classified with ids

// imports
import { FormType } from '../../../enums/FormType';

export const InputsArray = [
    {
        id: FormType.contactForm,
        type: 'text',
        name: 'Nome',
    },
    {
        id: FormType.contactForm,
        type: 'text',
        name: 'Email',
    },
    {
        id: FormType.contactForm,
        type: 'text',
        multiline: true,
        name: 'Mensagem',
    },
]