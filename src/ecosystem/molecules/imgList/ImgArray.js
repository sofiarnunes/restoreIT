// Name: Sofia Nunes 
// Date: 22-10-2022
// Motive: array component with all the img in the app

// img
import Paper1 from '../../../assets/img/paper1.jpg';
import Paper2 from '../../../assets/img/paper2.jpg';
import Paper3 from '../../../assets/img/paper3.jpg';
import Paper4 from '../../../assets/img/paper4.jpg';
import Paper5 from '../../../assets/img/paper5.jpg';
import Paper6 from '../../../assets/img/paper6.jpg';
import Paper7 from '../../../assets/img/paper7.jpg';
import Paper8 from '../../../assets/img/paper8.jpg';
import Paper9 from '../../../assets/img/paper9.jpg';
import Paper10 from '../../../assets/img/paper10.jpg';
import Paper11 from '../../../assets/img/paper11.jpg';
import Paper12 from '../../../assets/img/paper12.jpg';
import Parch1 from '../../../assets/img/parchment1.jpg';
import Parch2 from '../../../assets/img/parchment2.jpg';
import Parch3 from '../../../assets/img/parchment3.jpg';
import Books1 from '../../../assets/img/books1.jpg';
import Books2 from '../../../assets/img/books2.jpg';
import Books3 from '../../../assets/img/books3.jpg';
import Books4 from '../../../assets/img/books4.jpg';
import Books5 from '../../../assets/img/books5.jpg';
import Books6 from '../../../assets/img/books6.jpg';
import Books7 from '../../../assets/img/books7.jpg';
import Books8 from '../../../assets/img/books8.jpg';
import Photo1 from '../../../assets/img/photography1.jpg';
import Photo2 from '../../../assets/img/photography2.jpg';
import Photo3 from '../../../assets/img/photography3.jpg';
import Photo4 from '../../../assets/img/photography4.jpg';
import Photo5 from '../../../assets/img/photography5.jpg';
import Photo6 from '../../../assets/img/photography6.jpg';
import Photo7 from '../../../assets/img/photography7.jpg';
import Photo8 from '../../../assets/img/photography8.jpg';
import Photo9 from '../../../assets/img/photography9.jpg';

// imports
import { ImgType } from '../../../enums/ImgType';

export const ImgArray = [
    {
        id: ImgType.services,
        imgIdentifier: ImgType.servicesPaper,
        url: Paper1,
        name: 'Papel',
        title:'Doc. 1',
        subtitle: 'Antes da intervenção',
        alt: 'paper restore 1',
    },
    {
        id: ImgType.services,
        imgIdentifier: ImgType.servicesParch,
        url: Parch1,
        name: 'Pergaminho',
        title: 'Doc. 1',
        subtitle: 'Antes da intervenção',    
        alt: 'parchment restore 1',
    },
    {
        id: ImgType.services,
        imgIdentifier: ImgType.servicesBooks,
        url: Books1,
        name: 'Livros',
        title: 'Doc. 1',
        subtitle: 'Antes da intervenção',    
        alt: 'books restore 1',
    },
    {
        id: ImgType.services,
        imgIdentifier: ImgType.servicesPhoto,
        url: Photo1,
        name: 'Fotografia',
        title:'Doc. 1',
        subtitle: 'Antes da intervenção',
        alt: 'photography restore 1',
    },
    {
        id: ImgType.servicesPaper,
        url: Paper2,
        title: 'Doc. 1 ',
        subtitle: 'Depois da intervenção',
        alt: 'paper restore 2',
    },
    {
        id: ImgType.servicesPaper,
        url: Paper3,
        title: 'Doc. 2',
        subtitle: 'Antes da intervenção',
        alt: 'paper restore 3',
    },
    {
        id: ImgType.servicesPaper,
        url: Paper4,
        title: 'Doc. 2',
        subtitle: 'Depois da intervenção',

        alt: 'paper restore 4',
    },
    {
        id: ImgType.servicesPaper,
        url: Paper5,
        title: 'Doc. 3',
        subtitle: 'Antes da intervenção',
        alt: 'paper restore 5',
    },
    {
        id: ImgType.servicesPaper,
        url: Paper6,
        title: 'Doc. 3',
        subtitle: 'Depois da intervenção',
        alt: 'paper restore 6',
    },
    {
        id: ImgType.servicesPaper,
        url: Paper7,
        title: 'Doc. 4',
        subtitle: 'Antes da intervenção',
        alt: 'paper restore 7',
    },
    {
        id: ImgType.servicesPaper,
        url: Paper8,
        title: 'Doc. 4',
        subtitle: 'Depois da intervenção',
        alt: 'paper restore 8',
    },
    {
        id: ImgType.servicesPaper,
        url: Paper9,
        title: 'Doc. 5',
        subtitle: 'Antes da intervenção',
        alt: 'paper restore 9',
    },
    {
        id: ImgType.servicesPaper,
        url: Paper10,
        title: 'Doc. 5',
        subtitle: 'Antes da intervenção',
        alt: 'paper restore 10',
    },
    {
        id: ImgType.servicesPaper,
        url: Paper11,
        title: 'Doc. 5',
        subtitle: 'Antes da intervenção',
        alt: 'paper restore 11',
    },
    {
        id: ImgType.servicesPaper,
        url: Paper12,
        title: 'Doc. 5',
        subtitle: 'Depois da intervenção',
        alt: 'paper restore 12',
    },
    {
        id: ImgType.servicesParch,
        url: Parch2,
        title: 'Doc. 1',
        subtitle: 'Antes da intervenção',        
        alt: 'parchment restore 2',
    },
    {
        id: ImgType.servicesParch,
        url: Parch3,
        title: 'Doc. 1',
        subtitle: 'Depois da intervenção',        
        alt: 'parchment restore 3',
    },
    {
        id: ImgType.servicesBooks,
        url: Books2,
        title: 'Doc. 1',
        subtitle: 'Depois da intervenção',        
        alt: 'books restore 2',
    },
    {
        id: ImgType.servicesBooks,
        url: Books3,
        title: 'Doc. 1',
        subtitle: 'Antes da intervenção',        
        alt: 'books restore 3',
    },
    {
        id: ImgType.servicesBooks,
        url: Books4,
        title: 'Doc. 1',
        subtitle: 'Depois da intervenção',        
        alt: 'books restore 4',
    },
    {
        id: ImgType.servicesBooks,
        url: Books5,
        title: 'Doc. 2',
        subtitle: 'Antes da intervenção',        
        alt: 'books restore 5',
    },
    {
        id: ImgType.servicesBooks,
        url: Books6,
        title: 'Doc. 2',
        subtitle: 'Depois da intervenção',        
        alt: 'books restore 6',
    },
    {
        id: ImgType.servicesBooks,
        url: Books7,
        title: 'Doc. 3',
        subtitle: 'Antes da intervenção',        
        alt: 'books restore 7',
    },
    {
        id: ImgType.servicesBooks,
        url: Books8,
        title: 'Doc. 3',
        subtitle: 'Depois da intervenção',        
        alt: 'books restore 8',
    },
    {
        id: ImgType.servicesPhoto,
        url: Photo2,
        title:'Doc. 1',
        subtitle: 'Depois da intervenção',
        alt: 'photography restore 2',
    },
    {
        id: ImgType.servicesPhoto,
        url: Photo3,
        title:'Doc. 2',
        subtitle: 'Antes da intervenção',
        alt: 'photography restore 3',
    },
    {
        id: ImgType.servicesPhoto,
        url: Photo4,
        title:'Doc. 2',
        subtitle: 'Depois da intervenção',
        alt: 'photography restore 4',
    },
    {
        id: ImgType.servicesPhoto,
        url: Photo5,
        title:'Doc. 3',
        subtitle: 'Antes da intervenção',
        alt: 'photography restore 5',
    },
    {
        id: ImgType.servicesPhoto,
        url: Photo6,
        title:'Doc. 3',
        subtitle: 'Depois da intervenção',
        alt: 'photography restore 6',
    },
    {
        id: ImgType.servicesPhoto,
        url: Photo7,
        title:'Doc. 4',
        subtitle: 'Antes da intervenção',
        alt: 'photography restore 7',
    },
    {
        id: ImgType.servicesPhoto,
        url: Photo8,
        title:'Doc. 4',
        subtitle: 'Depois da intervenção',
        alt: 'photography restore 8',
    },
]