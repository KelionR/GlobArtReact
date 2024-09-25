import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Location from './Pages/Location';
import AdminCarrusel from './Pages/Admin'; 
import Login from './Pages/Login'; 
import Register from './Pages/Register'; 
import PrivateRoute from './Components/PrivateRoute'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />
        <Route path="/register" element={<Register onRegister={setIsAuthenticated} />} />
        
        {/* Rutas privadas */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/admin" element={<AdminCarrusel />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;