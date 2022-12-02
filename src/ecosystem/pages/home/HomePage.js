import React, { useState, useRef } from 'react';
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
import Footer from '../../molecules/footer/Footer';

const HomePage = () => {

    const [isShown, setIsShown] = useState(false);
    const [showType, setShownType] = useState([]);
    const [urlSelected, setUrlSelected] = useState('');

    const scrollToRef = (ref) => window.scrollTo({top: ref.current.offsetTop + 200, behavior: 'smooth'})   

    const refSobre = useRef(null)
    const refServiços = useRef(null)
    const refContactos = useRef(null)

    const handleSearch = (data) => {
        if(data === 'Sobre'){
            scrollToRef(refSobre)
        } else if (data === 'Serviços') {
            scrollToRef(refServiços)
        } else {
            scrollToRef(refContactos)
        }
    }

    const innerWidth = window.innerWidth;

    return (
        <div>
            <TopBar id={MenuType.topBar} handleSearch={handleSearch}/>
            <Box component="main" sx={{ p: {  xs: 1, md: 3 } }}>
                <Toolbar />
                <Banner/>
                <div className={innerWidth > 600 ? 'general-container-big' : 'general-container-small'}>
                    <About currRef={refSobre}/>
                    <Divider/>
                    <Services setShow={() => setIsShown(true)} setShownType={setShownType} currRef={refServiços}/>
                    <Divider/>
                    <Contact currRef={refContactos}/>
                </div>
            </Box>
            <Footer/>

            {isShown ?
                <PopUp close={() => {urlSelected.length ? setUrlSelected('') : setIsShown(false)}} urlSelected={urlSelected} setUrlSelected={setUrlSelected} content={<ImgCompleteList id={showType} setUrlSelected={setUrlSelected}/>}/>
            : null}
        </div>
    );
};

export default HomePage;