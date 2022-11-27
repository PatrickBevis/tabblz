import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Connexion from './pages/Connexion/Connexion';
import Inscription from './pages/Inscription/Inscription';
import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <>
    

    <Routes>
      <Route index element={<Connexion/>}/>
      <Route path='/inscription' element={<Inscription/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='*' element ={<Error404/>}/>
    </Routes>
    
    </>
  );
}

export default App;
