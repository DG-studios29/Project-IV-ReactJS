import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import your CSS file

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/user/${username}`);
      setUserData(response.data);
      setError('');
    } catch (error) {
      setError('User not found');
      setUserData(null);
    }
  };

  return (
    <div className="container">
      <h1>Github User Explorer</h1>
      <div className="search-container">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {userData && (
        <div className="user-details">
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt="User Avatar" />
          <p>{userData.bio}</p>
        </div>
      )}
    </div>
  );
};

export default App;
