import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Component to display details of a GitHub repository
function RepoDetails() {
  const { owner, repo } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);
  const [commits, setCommits] = useState([]);

  // Fetch repository details and last 5 commits from backend
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/api/repos/${owner}/${repo}`);
      setRepoDetails(response.data.repo);
      setCommits(response.data.commits);
    };
    fetchData();
  }, [owner, repo]);

  if (!repoDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>{repoDetails.name}</h1>
      <p>{repoDetails.description}</p>
      <p>Created at: {repoDetails.created_at}</p>
      <p>Last commit at: {repoDetails.pushed_at}</p>
      <h2>Last 5 Commits:</h2>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>{commit.commit.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default RepoDetails;
