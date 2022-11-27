import React from "react";
import { Link } from "react-router-dom";
import {
  RiLoginCircleLine,
  RiHome4Fill,
  RiFolderUserFill,
  RiArticleFill,
  RiPriceTag3Fill,
} from "react-icons/ri";
import { MdCategory } from "react-icons/md";

const NavSideDesk = () => {
  return (
    <nav className=" d-flex justify-content-around bg-white   fixed-bottom container-fluid">
      <div
        className="offcanvas offcanvas-start sidenav bg-white"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header bg-white">
          <h5 className="offcanvas-title bg-white" id="offcanvasExampleLabel">
            BLOG Admin
          </h5>
          <Link className="nav-link p-2 bg-white" to="/login">
            <RiLoginCircleLine className="text-secondary bg-white text-danger" size={60} />
          </Link>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <Link className="nav-link p-1" to="/">
                <RiHome4Fill className="text-secondary me-2" size={30} />
                <span className="align-bottom">Accueil</span>
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link p-1" to="/accounts">
                <RiFolderUserFill
                  className="text-secondary me-2"
                  size={"1.4rem"}
                />
                <span className="align-bottom">Utilisateurs</span>
              </Link>
            </li>
            <li className="nav-item p-1">
              <Link className="nav-link p-2" to="/articles">
                <RiArticleFill
                  className="text-secondary me-2"
                  size={"1.4rem"}
                />
                <span className="align-bottom">Articles</span>
              </Link>
            </li>
            <li className="nav-item p-1">
              <Link className="nav-link p-2" to="/themes">
                <MdCategory className="text-secondary me-2" size={"1.4rem"} />
                <span className="align-bottom">Thèmes</span>
              </Link>
            </li>
            <li className="nav-item p-1 bg-white">
              <Link className="nav-link p-2 bg-white" to="/tags">
                <RiPriceTag3Fill
                  className="text-secondary me-2 bg-white"
                  size={"1.4rem"}
                />
                <span className="align-bottom bg-white">Tags</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavSideDesk;
