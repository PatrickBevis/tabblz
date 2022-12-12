import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { BiHomeCircle } from "react-icons/bi";
import { FiKey} from 'react-icons/fi';
import { AuthContext } from "../../../contexts/AuthContext";
import { deleteCookie } from "../../../helpers/CookiesHelpers";

const NavSideDesk = () => {
  const { auth, setAuth } = useContext(AuthContext);

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
            {auth.role > 0 &&(
            <li className="nav-item p-2">
              <Link className="nav-link p-1" to="/account">
                <IoIosContact className="text-danger me-2" size={30} />
                <span className="align-bottom">Compte</span>
              </Link>
            </li>
            )}
            {auth.role === 4 && (
              <li className="nav-item p-2">
                <Link className="nav-link p-1" to="/admin">
                  <FiKey className="text-danger me-2" size={30} />
                  <span className="align-bottom">Admin</span>
                </Link>
              </li>
            )}

            <li className="nav-item p-2">
              <Link className="nav-link m-auto" to="/home">
                <button type="submit" className="btn btn-danger  mt-2">
                  Créer un repas
                </button>
              </Link>
            </li>
            {auth.role > 0 && (
              <li className="nav-item p-2">
                <button
                  type="submit"
                  className="btn btn-secondary  mt-2"
                  onClick={() => {
                    setAuth({ role: 0, id: "0" });
                    deleteCookie("tabblz");
                    window.location.href = "/";
                  }}
                >
                  Se deconnecter
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavSideDesk;
