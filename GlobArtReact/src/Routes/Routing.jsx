import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Location from './Pages/Location';
import Admin from './Pages/Admin';
import PrivateRoute from './Components/PrivateRoute';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;