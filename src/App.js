import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Connexion from './pages/Connexion/Connexion';
import Inscription from './pages/Inscription/Inscription';

function App() {
  return (
    <>
    <Routes>
      <Route path='/connexion' element={<Connexion/>}/>
      <Route path='/inscription' element={<Inscription/>}/>
    </Routes>
    
    </>
  );
}

export default App;
