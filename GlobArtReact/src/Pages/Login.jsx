import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Mediaquery.css'

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para redireccionar

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Lógica para verificar las credenciales
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
    
    const user = users.find(user => user.username === credentials.username && user.password === credentials.password);

    if (user) {
      onLogin(true); // Llama a la función onLogin para autenticar al usuario
      navigate('/admin'); // Redirige a la página de administración
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Usuario" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Iniciar Sesión</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default Login;