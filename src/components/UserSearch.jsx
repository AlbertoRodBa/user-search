import React from 'react';

const UserSearch = ({ fetchUser, username, setUsername }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese el nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-700 bg-gray-800 text-white rounded-lg p-2 mb-3 w-72"
      />
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => fetchUser(username)}>
        Buscar
      </button>
    </div>
  );
};

export default UserSearch;
