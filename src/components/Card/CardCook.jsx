import React from "react";
import "../Card/CardCook.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CardCook = () => {
  return (
    <div className="col-12 col-lg-6">
      <div>
        <div className=" container ">
          <div className=" row  ml mb-5 mt-5 ">
            <div className=" card border p-1 rounded-4 shadow-lg ">
              <div className="bg-white ">
                <h5 className="card-title bg-white  mt-3 ms-2">
                  Patrick BEVIS
                </h5>
              </div>
              <div className=" card-body bg-white fw-bold">
                <p className="card-text">Repas: </p>
                <p className="card-text d-flex fw-bold d-inline">
                  ... portions
                  <p className="ms-5">Prix/U: ...€</p>
                </p>
                <small className="card-text text-secondary fw-bold fst-italic">
                  Posté le ...
                </small>
              </div>

              <div className="bg-white d-flex justify-content-end">
                <button type="submit" className="btn btn-danger me-2 mb-2">
                  Commander
                  <BsFillArrowRightCircleFill
                    size={30}
                    className="bg-danger text-white ms-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCook;
