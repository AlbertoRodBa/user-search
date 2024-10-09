import React, { useState, useEffect } from 'react';
import './index.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fetchUser = async () => {
    setError('');
    setUserData(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Usuario no encontrado');
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Búsqueda de Usuario de GitHub</h1>
      <input
        type="text"
        placeholder="Ingrese el nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-700 bg-gray-800 text-white rounded-lg p-2 mb-3 w-72"
      />
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2" onClick={fetchUser}>
        Buscar
      </button>
      {error && <p className="text-red-400">{error}</p>}
      {userData && (
        <div className="bg-gray-800 rounded-lg shadow-lg p-4 mt-4">
          <h2 className="text-2xl font-semibold">{userData.login}</h2>
          <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full mx-auto" />
          <p className="mt-2">Seguidores: {userData.followers}</p>
          <p>Repositorios: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default App;
