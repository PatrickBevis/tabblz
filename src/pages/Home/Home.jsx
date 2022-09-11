import React from 'react';
import NavBotMob from '../../components/NavbarGrp/NavBotMob/NavBotMob';
import Logo from '../../img/logo.png'


const Home = () => {
    return (
        <>
         <div style={{ 
      backgroundImage: `url(${Logo})`
    }}></div>
            <div className="container">
                <div className=' row d-flex align-items-center vh-100 '>
            <div className="card border p-1 rounded-4 shadow-lg" >
  <img src="..." className="card-img-top bg-white" alt="..."/>
  <div className="card-body bg-white">
    <h5 className="card-title bg-white">Card title</h5>
    <p className="card-text bg-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>
            </div>
            <NavBotMob />
        </>
    );
};

export default Home;