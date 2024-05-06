import React, { useState } from 'react';
import axios from 'axios';

const UserSearch = ({ onUserSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/users?q=${searchTerm}`);
      const users = response.data.items; // Assuming the API returns an array of users
      onUserSelect(users);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search GitHub users"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default UserSearch;
