import React from 'react';
import NavBotMob from '../../components/NavbarGrp/NavBotMob/NavBotMob';
import Logo from '../../img/logo.png'
import Footer from '../../components/Footer/Footer';
import CardCook from '../../components/Card/CardCook';
import NavSideDesk from '../../components/NavbarGrp/NavSideDesk/NavSideDesk';

const Home = () => {
    return (
        <>
        
           <CardCook />
           <NavSideDesk />
            <NavBotMob />
            <Footer />
        </>
    );
};

export default Home;