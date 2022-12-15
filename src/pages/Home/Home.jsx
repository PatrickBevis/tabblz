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
      <div className="container">
        <div className="row">
          
          {data?.data.map((meal) => {
            return (
              
                <CardCook key={meal.Id_meal}
                title= {meal.title}
                price = {meal.price}
                number = {meal.number}
                created_at = {meal.release_date}
                 />
              
             
            );
          })}
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
