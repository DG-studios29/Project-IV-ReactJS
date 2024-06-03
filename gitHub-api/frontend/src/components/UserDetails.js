import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/api/users/${username}`);
      setUser(response.data.user);
      setRepos(response.data.repos);
    };
    fetchData();
  }, [username]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <h1>{user.login}</h1>
      <p>{user.bio}</p>
      <h2>Repositories:</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${user.login}/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetails;
