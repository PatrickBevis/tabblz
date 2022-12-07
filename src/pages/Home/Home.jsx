import React from "react";
import NavBotMob from "../../components/NavbarGrp/NavBotMob/NavBotMob";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import CardCook from "../../components/Card/CardCook";
import NavSideDesk from "../../components/NavbarGrp/NavSideDesk/NavSideDesk";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <div className="container">

        <div className="row">
          <CardCook />
          <CardCook />
          <CardCook />
          <CardCook />
          <CardCook />
          
        </div>
      </div>
      <Header />

      <NavSideDesk />
      <NavBotMob />
      <Footer />
    </>
  );
};

export default Home;
