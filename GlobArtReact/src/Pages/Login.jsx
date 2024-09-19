import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar autenticación
    if (credentials.username === "admin" && credentials.password === "password") {
      onLogin(true); // Llama a la función onLogin para autenticar al usuario
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Usuario" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Iniciar Sesión</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Login;