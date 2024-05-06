import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RepoDetails = ({ repoName }) => {
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const response = await axios.get(`/api/repos/${repoName}`);
        setRepoDetails(response.data); // Assuming the API returns repository details
      } catch (error) {
        console.error('Error fetching repository details:', error);
      }
    };

    fetchRepoDetails();
  }, [repoName]);

  return (
    <div>
      {repoDetails ? (
        <div>
          <h2>{repoDetails.name}</h2>
          <p>{repoDetails.description}</p>
          {/* Additional repo details */}
        </div>
      ) : (
        <p>Loading repository details...</p>
      )}
    </div>
  );
};

export default RepoDetails;
