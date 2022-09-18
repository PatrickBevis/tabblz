import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      
        <footer className="bg-white container-fluid bg-white border-top border-3 d-none d-lg-block border-danger ">
          <div className="bg-white d-flex justify-content-center  mt-3">
            <div className="d-flex border p-1 rounded-4 me-2 bg-white ">
              <FaTwitter size={40} className="bg-white text-danger" />
            </div>
            <div className="d-flex border p-1 rounded-4 me-2 bg-white ">
              <FaInstagram size={40} className="bg-white text-danger" />
            </div>
            <div className="d-flex border p-1 rounded-4  bg-white">
              <FaFacebookF size={40} className="bg-white text-danger" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg d-flex flex-column align-items-center bg-white">
              <h5 className="m-2 bg-white">A propos</h5>
              <p className="m-0 bg-white">Contact</p>
              <p className="m-0 bg-white">Réservation</p>
              <p className="m-0 bg-white">Mentions légales</p>
              <p className="m-0 bg-white">CGU</p>
            </div>
            <div className="col-lg d-flex flex-column align-items-center bg-white ">
              <h5 className="m-2 bg-white">Contact</h5>
              <p className="m-0 bg-white">123 rue du pain, 59400 Cambrai</p>
              <p className="m-0 bg-white">01 77 88 99 11</p>
              <p className="m-0 bg-white">contact@Louezunemaison.fr</p>
            </div>
          </div>
          
            <p class="d-flex justify-content-center bg-white p-3 m-0">&copy; 2022 tabblz (AFPA) | Patrick Bevis</p>
        
        </footer>
      
    </>
  );
};

export default Footer;
