import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Location from './Pages/Location';
import Admin from './Pages/Admin';
import PrivateRoute from './Components/PrivateRoute';
import { useState } from 'react';
import Carrusel from './Components/Carrusel';
import AdminCarousel from './Components/AdminCarrusel';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Rutas existentes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/location" element={<Location />} />
        <Route 
          path="/admin" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Admin />
            </PrivateRoute>
          } 
        />

        {/* Nuevas rutas para el carrusel */}
        <Route path="/carousel" element={<Carrusel />} /> {/* Vista del carrusel */}
        <Route 
          path="/admin-carousel" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}> {/* Protegido bajo autenticación */}
              <AdminCarousel />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;