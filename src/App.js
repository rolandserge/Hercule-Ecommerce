import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acceuil from './Pages/Acceuil';
import DetailProduit from './Pages/DetailProduit';
import Home from './Pages/Home';
import Panier from './Pages/Panier';

// import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Acceuil />} />
              <Route path="/home" element={<Home />} />
              <Route path="/detail-produit/:id" element ={<DetailProduit />} />
              <Route path="/mon-panier" element={<Panier />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
