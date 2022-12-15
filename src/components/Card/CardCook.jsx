import React from "react";
import "../Card/CardCook.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardCook = ({price, created_at, title, number }) => {
  return (
    
      <div className="col-12 col-lg-6">
        <div className=" container-fluid ">
          <div className=" row">
            <div className=" card border p-1 rounded-4 shadow-lg mb-3 mt-2 ms-2 ">
              <div className="bg-white ">
                <h5 className="card-title bg-white d-flex justify-content-center  border-bottom border-danger border-3 p-2">
                  {title}
                </h5>
              </div>
              <div className=" card-body bg-white fw-bold">
                
                <p className="card-text d-flex fw-bold d-inline">
                  {number} portions
                  
                </p>
                <p>Prix/U: {price}€</p>
                <small className="card-text text-secondary fw-bold fst-italic">
                  Posté le {created_at}
                </small>
              </div>

              <div className="bg-white d-flex justify-content-end">
              <Link className="nav-link m-auto" to="/meal">
                <button type="submit" className="btn btn-danger me-2 mb-2">
                  Commander
                  <BsFillArrowRightCircleFill
                    size={30}
                    className="bg-danger text-white ms-2"
                  />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default CardCook;
