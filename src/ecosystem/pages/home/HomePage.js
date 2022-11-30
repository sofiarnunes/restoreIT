import React, { useState } from 'react';
import TopBar from '../../organisms/topBar/TopBar';
import { MenuType } from '../../../enums/MenuType';
import { Box } from '@mui/system';
import { Divider, Toolbar } from '@mui/material';
import Banner from '../../organisms/banner/Banner';
import About from '../../organisms/about/About';
import Services from '../../organisms/services/Services';
import Contact from '../../organisms/contacts/Contact';
import PopUp from '../../molecules/popUp/PopUp';
import ImgCompleteList from '../../molecules/imgList/ImgCompleteList';

const HomePage = () => {

    const [isShown, setIsShown] = useState(false);
    const [showType, setShownType] = useState([]);
    const [urlSelected, setUrlSelected] = useState('');

    return (
        <div>
            <TopBar id={MenuType.topBar}/>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Banner/>
                <div className='general-container'>
                    <About/>
                    <Divider/>
                    <Services setShow={() => setIsShown(true)} setShownType={setShownType}/>
                    <Divider/>
                    <Contact/>
                </div>
            </Box>
            {isShown ?
                <PopUp close={() => {urlSelected.length ? setUrlSelected('') : setIsShown(false)}} urlSelected={urlSelected} setUrlSelected={setUrlSelected} content={<ImgCompleteList id={showType} setUrlSelected={setUrlSelected}/>}/>
            : null}
        </div>
    );
};

export default HomePage;