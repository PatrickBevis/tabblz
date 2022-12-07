import React from "react";

const Header = () => {
  return (
    <>
      <header className=" d-lg-none fixed-top container-fluid d-flex border-bottom border-danger border-2 bg-white flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-column justify-content-center align-items-end ">
              <p>Bonjour, </p>
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
