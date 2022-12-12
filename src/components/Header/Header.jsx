import React, { useContext } from "react";
import { FiKey } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {

    const { auth} = useContext(AuthContext);
  return (
    <>
      <header className=" d-lg-none fixed-top container-fluid d-flex border-bottom border-danger border-2 bg-white flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-column justify-content-center align-items-end ">
              
              <span>{auth.role === 4 && (
              
              <Link className="nav-link p-1" to="/admin">
                <span>Bonjour, </span>
                <FiKey className="text-danger ms-5" size={20} />
              
              </Link> )}</span>
            </div>
            
              
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
