import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar_url} alt="User Avatar" />
      <p>{user.bio}</p>
      {/* Display user repos */}
      {/* Display user's repo details */}
    </div>
  );
};

export default UserDetails;
