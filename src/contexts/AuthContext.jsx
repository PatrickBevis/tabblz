import React, { createContext, useState, useEffect } from "react";
import { deleteCookie} from "../helpers/CookiesHelpers";
import doFetch from "../helpers/FetchHelpers";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 
  const [auth, setAuth] = useState({ role: 0, id: "0"});

  useEffect(() => {
    const check = async () =>{
    const {data} = await doFetch("auth/check"); 
        if (data?.result) {
          setAuth({ role: +data?.role, id:data?.id });
        } else {
          setAuth({ role: 0, id:"0"});
          deleteCookie("tabblz");
        }
      }
      check()
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
