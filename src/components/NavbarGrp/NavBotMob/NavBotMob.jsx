import React, { useContext } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { ImExit } from "react-icons/im";
import { AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { deleteCookie } from "../../../helpers/CookiesHelpers";
const NavBotMob = () => {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <>
      <nav
        className="navbar d-lg-none d-flex  justify-content-around bg-white border-top border-2 border-danger fixed-bottom container-fluid"
        id="navbar"
      >
        <div className="d-flex border p-1 rounded-4 shadow-lg bg-white ">
          <Link className="nav-link " to="/home">
            <BiHomeCircle className="text-danger " size={30} />
          </Link>
        </div>

        <div className="d-flex border p-1 rounded-4 shadow-lg bg-white ">
          <AiFillPlusSquare size={60} className="bg-light text-danger " />
        </div>

        <div className="d-flex border p-1 rounded-4 shadow-lg bg-white">
          {auth.role > 0 && (
            <Link className="nav-link" to="/account">
              <IoIosContact className="text-danger " size={30} />
            </Link>
          )}
        </div>
        {/* <div className="d-flex border p-1 rounded-4 shadow-lg bg-white">
          {auth.role > 0 && (
            <Link
              className="nav-link"
              onClick={() => {
                setAuth({ role: 0, id: "0" });
                deleteCookie("tabblz");
                window.location.href = "/";
              }}
            >
              <ImExit className="text-primary " size={30} />
            </Link>
          )}
        </div> */}
      </nav>
    </>
  );
};

export default NavBotMob;
