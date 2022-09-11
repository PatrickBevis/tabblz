import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Connexion from './pages/Connexion/Connexion';
import Inscription from './pages/Inscription/Inscription';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
    

    <Routes>
      <Route path='/connexion' element={<Connexion/>}/>
      <Route path='/inscription' element={<Inscription/>}/>
      <Route path='/home' element={<Home/>}/>

    </Routes>
    
    </>
  );
}

export default App;
