import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Component to search for GitHub users
function UserSearch() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  // Function to search users from GitHub API
  const searchUsers = async () => {
    const response = await axios.get(`http://localhost:5000/api/users/${username}`);
    setUsers([response.data.user]);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub users"
      />
      <button onClick={searchUsers}>Search</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserSearch;
