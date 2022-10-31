// Name: Sofia Nunes 
// Date: 22-10-2022
// Motive: array component with all the img in the app

// img
import Paper1 from '../../../assets/img/paper1.jpg';
import Parch1 from '../../../assets/img/parchment1.jpg';
import Books1 from '../../../assets/img/books1.jpg';
import Photo1 from '../../../assets/img/photography1.jpg';

// imports
import { ImgType } from '../../../enums/ImgType';

export const ImgArray = [
    {
        id: ImgType.services,
        url: Paper1,
        name: 'Papel',
        alt: 'paper restore 1',
    },
    {
        id: ImgType.services,
        url: Parch1,
        name: 'Pergaminho',
        alt: 'parchment restore 1',
    },
    {
        id: ImgType.services,
        url: Books1,
        name: 'Livros',
        alt: 'books restore 1',
    },
    {
        id: ImgType.services,
        url: Photo1,
        name: 'Fotografia',
        alt: 'photography restore 1',
    },
    {
        id: ImgType.servicesPaper,
        url: Photo1,
        name: '',
        alt: 'photography restore 2',
    },
]