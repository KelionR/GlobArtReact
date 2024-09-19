import Header from '../Components/Header';
import AdminPage from '../Components/AdminPage';
import Login from '../Pages/Login';
import { useState } from 'react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Header />
      <main>
        {!isAuthenticated ? (
          <Login onLogin={setIsAuthenticated} />
        ) : (
          <AdminPage />
        )}
      </main>
    </>
  );
};

export default Admin;