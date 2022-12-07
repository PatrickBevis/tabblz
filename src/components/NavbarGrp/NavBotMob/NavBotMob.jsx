import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { AiFillPlusSquare } from "react-icons/ai";
const NavBotMob = () => {
  return (
    <>
      <nav
        className="navbar d-lg-none d-flex  justify-content-around bg-white border-top border-2 border-danger fixed-bottom container-fluid"
        id="navbar"
      >
        <div className="d-flex border p-1 rounded-4 shadow-lg bg-white ">
          <BiHomeCircle size={30} className="bg-white text-danger" />
          
        </div>

        <div className="d-flex border p-1 rounded-4 shadow-lg bg-white ">
          <AiFillPlusSquare size={60} className="bg-light text-danger " />
         
        </div>

        <div className="d-flex border p-1 rounded-4 shadow-lg bg-white">
          <IoIosContact size={30} className=" bg-white text-danger " />
          
        </div>
      </nav>
    </>
  );
};

export default NavBotMob;
