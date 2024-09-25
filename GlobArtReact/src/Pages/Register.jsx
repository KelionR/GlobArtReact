import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Mediaquery.css'

const Register = ({ onRegister }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para redireccionar

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para guardar el usuario en db.json
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      onRegister(true); // Llama a la función onRegister para autenticar al usuario
      navigate('/login'); // Redirige a la página de inicio de sesión
    } else {
      setError('Error al registrar el usuario');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Usuario" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Registrar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Register;