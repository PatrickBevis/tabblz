import React from 'react';
import NavBotMob from '../../components/NavbarGrp/NavBotMob/NavBotMob';
import Logo from '../../img/logo.png'
import Footer from '../../components/Footer/Footer';
import CardCook from '../../components/Card/CardCook';

const Home = () => {
    return (
        <>
         <div style={{ 
      backgroundImage: `url(${Logo})`
    }}></div>
           <CardCook />
            <NavBotMob />
            <Footer />
        </>
    );
};

export default Home;