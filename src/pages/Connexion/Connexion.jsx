import React from "react";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { setCookie, deleteCookie } from "../../helpers/CookiesHelpers";
import doFetch from "../../helpers/FetchHelpers";

const Connexion = () => {
  const { setAuth } = useContext(AuthContext);
  const  navigate  = useNavigate();

  const [valid, setValid] = useState({ email: false, password: false });
  const validForm = (jsonData) => {
    const isValid = { email: false, password: false };
    const emailInput = document.getElementById("email-input");
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);
    if (!validForm(jsonData)) {
      return;
    }
    const {data} = await doFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(jsonData),
    });
    if (data?.data?.result) {
      setAuth({ role: +data?.data?.role, id: data?.data?.id });
      setCookie("tabblz", data?.data?.token, { "max-age": 60 * 60 * 24 });
      navigate("/home");
    } else {
      setAuth({ role: 0, id: "0" });
      deleteCookie("tabblz");
    }
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
                <label htmlFor="email-input" className="form-label bg-white" >
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
                 <i className={"text-danger" + (valid.email ? " d-none" : "")}>
             *must be a valid email address
            </i>
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
                <i className={"text-danger" + (valid.password ? " d-none" : "")}>
             *6 characters including a capital letter
          </i>
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
                <Link className="nav-link m-auto" to="/inscription">
                  <button type="button" className="btn btn-success">
                    S'inscrire
                  </button>
                  </Link>
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
