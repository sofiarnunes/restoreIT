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

const HomePage = () => {

    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <TopBar id={MenuType.topBar}/>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Banner/>
                <div className='general-container'>
                    <About/>
                    <Divider/>
                    <Services setShow={() => setIsShown(true)}/>
                    <Divider/>
                    <Contact/>
                </div>
            </Box>
            {isShown ?
                <PopUp close={() => setIsShown(false)}/>
            : null}
        </div>
    );
};

export default HomePage;