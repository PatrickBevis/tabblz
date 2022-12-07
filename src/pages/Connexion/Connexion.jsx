import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Connexion = () => {
  const { setAuth } = useContext(AuthContext);
  const  navigate  = useNavigate();

  const [valid, setValid] = useState({ email: false, password: false });
  const validForm = (jsonData) => {
    const isValid = { email: false, password: false };
    const emailInput = document.getElementById("email-input");
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailPattern.test(emailInput.value)) {
      isValid.email = true;
    }
    const passwordInput = document.getElementById("password-input");
    const passwordPattern = /^(?=.*[A-Z]).{6,}$/;
    if (passwordPattern.test(passwordInput.value)) {
      isValid.password = true;
    }
    setValid(isValid);
    return isValid.email === true && isValid.password === true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);
    if (!validForm(jsonData)) {
      return;
    }
    fetch("http://tabblz.api/auth/login", {
      method: "POST",
      body: JSON.stringify(jsonData),
    })
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        if (json?.data?.result) {
          // console.log(json?.data?.token)
          setAuth({ role: +json?.data?.role });
          document.cookie = `blog=${json?.data?.token};max-age=${60*60*24};`;
          navigate("/home");
        } else {
          setAuth({ role: 0 });
          document.cookie = `blog=null;max-age=0;`;
        }
      });
  };

  return (
    <>
      <div className="container ">
        <div className="row d-flex align-items-center vh-100  ">
          <div className="col d-none d-lg-block ">
            <h1 className="text-danger d-flex justify-content-end ">tabblz</h1>
            <h3 className="d-flex justify-content-end">
              Nous partageons votre passion !
            </h3>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <form
              className="border p-5 rounded-5 shadow-lg bg-white"
              onSubmit={handleSubmit}
              noValidate
            >
              <h1 className="d-flex justify-content-center d-lg-none mb-3  text-danger bg-white">
                tabblz
              </h1>
              <h2 className="d-flex justify-content-center mb-5 bg-white">
                Connexion
              </h2>
              <div className="mb-3 bg-white">
                <label htmlFor="email-input" className="form-label bg-white">
                  Email address
                </label>
                <span className="text-danger bg-white">*</span>
                <input
                  type="email"
                  name="login"
                  className="form-control"
                  id="email-input"
                  aria-describedby="emailHelp"
                />
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
              </div>
              <div className="mb-3 bg-white">
                <label htmlFor="password-input" className="form-label bg-white">
                  Password
                </label>
                <span className="text-danger bg-white">*</span>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password-input"
                />
              </div>

              <div className="d-flex justify-content-center bg-white">
                <div className="rounded-5">
                  <button type="submit" className="btn btn-danger">
                    Se connecter
                  </button>
                </div>
              </div>
              <hr />
              <p className="d-flex justify-content-center bg-white">
                Vous n'êtes pas inscrit ?
              </p>
              <div className="d-flex justify-content-center bg-white">
                <div className="rounded-5">
                  <button type="button" className="btn btn-success">
                    S'inscrire
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connexion;
