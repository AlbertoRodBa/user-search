import React from 'react';

const UserCard = ({ userData }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 mt-4">
      <h2 className="text-2xl font-semibold">{userData.login}</h2>
      <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full mx-auto" />
      <p className="mt-2">Seguidores: {userData.followers}</p>
      <p>Repositorios: {userData.public_repos}</p>
    </div>
  );
};

export default UserCard;
