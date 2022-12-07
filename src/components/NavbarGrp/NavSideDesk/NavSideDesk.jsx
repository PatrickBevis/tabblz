import React from "react";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { BiHomeCircle } from "react-icons/bi";
import { AiFillPlusSquare } from "react-icons/ai";

const NavSideDesk = () => {
  return (
    <nav className=" d-flex d-none d-lg-block justify-content-around   container-fluid">
      <div
        className="offcanvas offcanvas-start sidenav border-right border-5 border-danger "
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header ">
          <h5 className="offcanvas-title " id="offcanvasExampleLabel">
            Bonjour,
          </h5>
        </div>
        <div className="offcanvas-body ">
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <Link className="nav-link p-1" to="/home">
                <BiHomeCircle className="text-danger me-2" size={30} />
                <span className="align-bottom">Accueil</span>
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link p-1" to="/accounts">
                <IoIosContact className="text-danger me-2" size={30} />
                <span className="align-bottom">Compte</span>
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link m-auto" to="/home">
                <button type="submit" className="btn btn-danger  mt-2">
                  Créer un repas
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavSideDesk;
