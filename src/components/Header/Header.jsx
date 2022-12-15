import React, { useContext } from "react";
import { FiKey } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { deleteCookie } from "../../helpers/CookiesHelpers";
import useFetch from "../../hooks/UseFetch";

const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { data } = useFetch("appuser/" + auth.id, {
    method: "GET",
  });
  return (
    <>
      <header className=" d-lg-none fixed-top container-fluid d-flex border-bottom border-danger border-2 bg-white justify-content-end align-items-center">
        <div className="row">
          <div className="col d-flex  align-items-center">
            <span className="fw-bold">
                    Bonjour {data?.data[0]?.pseudo}{" "}
                  </span> 
              {auth.role === 4 && (
                <Link className="nav-link p-1 " to="/admin">
                  
                  <FiKey className="text-danger " size={20} />
                </Link>
              )}<span className="fw-bold">,</span>
           
            {auth.role > 0 && (
              <button
                type="submit"
                className="btn btn-white  mt-1"
                onClick={() => {
                  setAuth({ role: 0, id: "0" });
                  deleteCookie("tabblz");
                  window.location.href = "/";
                }}
              >
                <ImExit className="text-secondary " size={30} />
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
