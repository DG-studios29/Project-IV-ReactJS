import React from 'react';

const RepoDetails = ({ repo }) => {
  return (
    <div>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      {/* Display other repo details */}
      {/* List last 5 commits' descriptions */}
    </div>
  );
};

export default RepoDetails;
