import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetails = ({ username }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`/api/users/${username}`);
        setUserDetails(response.data); // Assuming the API returns user details
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [username]);

  return (
    <div>
      {userDetails ? (
        <div>
          <h2>{userDetails.login}</h2>
          <img src={userDetails.avatar_url} alt="Profile" />
          <p>{userDetails.bio}</p>
          {/* Additional user details */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetails;
