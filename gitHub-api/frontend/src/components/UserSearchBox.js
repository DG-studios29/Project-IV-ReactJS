import React, { useState } from 'react';

const UserSearchBox = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter GitHub username" value={username} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default UserSearchBox;
