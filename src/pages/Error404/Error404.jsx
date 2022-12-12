import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import manique from "../../img/manique.png";
import "../../pages/Error404/Error404.css";
const Error404 = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <div className="d-flex">
        <img src={manique} alt="" className="img m-auto mt-5" />
      </div>
      <div className="d-flex">
        <h2 className="m-auto mt-2 display-3 fw-bold">Error 404</h2>
      </div>
      {auth?.role > 0 ? (
        <div className="rounded-5 d-flex">
          <Link className="nav-link m-auto" to="/home">
            <button type="submit" className="btn btn-danger  mt-2">
              Retour a l'acceuil
            </button>
          </Link>
        </div>
      ) : (
        <div className="rounded-5 d-flex">
          <Link className="nav-link m-auto" to="/">
            <button type="submit" className="btn btn-danger  mt-2">
              Retour a l'acceuil
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Error404;
