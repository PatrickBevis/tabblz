import React from "react";
import { GiKnifeFork} from "react-icons/gi";
import { IoIosContact } from "react-icons/io";


const Admin = () => {

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
            Bonjour admin,
          </h5>
        </div>
        <div className="offcanvas-body ">
          <ul className="navbar-nav">
           
         
              <li className="nav-item p-2">
                
                  <IoIosContact className="text-danger me-2" size={30} />
                  <span className="align-bottom">Comptes</span>
               
              </li>
            
              <li className="nav-item p-2">
                
                <GiKnifeFork className="text-danger me-2" size={30} />
                <span className="align-bottom">Repas</span>
             
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Admin;