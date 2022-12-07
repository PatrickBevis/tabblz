import React, { createContext, useState, useEffect } from "react";
import { deleteCookie, getCookie } from "../helpers/CookiesHelpers";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 
  const [auth, setAuth] = useState({ role: 0, id: "0"});

  useEffect(() => {
    fetch("http://tabblz.api/auth/check", {
      credentials: "include",
      headers: {
        Authorization: getCookie("blog"),
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json?.data);
        if (json?.data?.result) {
          setAuth({ role: +json?.data?.role, id:json.id });
        } else {
          setAuth({ role: 0, id:"0"});
          deleteCookie("blog");
        }
      });
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
