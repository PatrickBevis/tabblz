import React from "react";
import NavBotMob from "../../components/NavbarGrp/NavBotMob/NavBotMob";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import CardCook from "../../components/Card/CardCook";
import NavSideDesk from "../../components/NavbarGrp/NavSideDesk/NavSideDesk";
import Header from "../../components/Header/Header";
import useFetch from "../../hooks/UseFetch";
const Home = () => {
  const { data, loading, error, text } = useFetch("meal");
  console.log(data);
  if (loading) return <div> Loading ... </div>;
  if (error) {
    console.log(error, text);
    return <div> Error ! </div>;
  }

  return (
    <>
    {data && data.data?.map((item, i) => <div key={i}> {item.title} </div>)}
      <div className="container">
        <div className="row">
          
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
