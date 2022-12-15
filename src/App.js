import { Routes, Route, Link } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Connexion from "./pages/Connexion/Connexion";
import Inscription from "./pages/Inscription/Inscription";
import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404/Error404";
import Admin from "./pages/Admin/Admin";
import Account from "./pages/Account/Account";
import Meal from "./pages/Meal/Meal"


function App() {
  const { auth } = useContext(AuthContext);

  return (
    <div className="container">
      
      <div>
        {auth.role > 0 && <Link to="/home"></Link>}

        {auth.role === 4 && <Link to="/admin"></Link>}
        {auth.role > 0 && <Link to="/account"></Link>}
      </div>

      <Routes>
        <Route index element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        {auth.role > 0 && <Route path="/home" element={<Home />} />}
        {auth.role > 0 && <Route path = "/account" element={<Account />}/>}
        {auth.role === 4 && <Route path="/admin" element={<Admin />} />}
        {auth.role > 0 && <Route path = "/meal:id" element={<Meal />}/>}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
