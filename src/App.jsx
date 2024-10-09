import React, { useState } from 'react';
import './index.css';
import UserSearch from './components/UserSearch'; 
import UserCard from './components/UserCard'; 

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fetchUser = async (username) => {
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
      <UserSearch fetchUser={fetchUser} username={username} setUsername={setUsername} />
      {error && <p className="text-red-400">{error}</p>}
      {userData && <UserCard userData={userData} />}
    </div>
  );
};

export default App;
