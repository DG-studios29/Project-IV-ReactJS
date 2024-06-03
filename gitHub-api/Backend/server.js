const express = require('express');
const axios = require('axios');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(helmet()); // Security middleware
app.use(cors()); // Cross-Origin Resource Sharing middleware
app.use(express.json()); // JSON parsing middleware

const githubApiUrl = 'https://api.github.com'; // GitHub API base URL
const token = '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'; // GitHub API token

// Route to get user details and repos
app.get('/api/users/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const userResponse = await axios.get(`${githubApiUrl}/users/${username}`, {
            headers: { Authorization: `token ${token}` }
        });
        const reposResponse = await axios.get(userResponse.data.repos_url, {
            headers: { Authorization: `token ${token}` }
        });
        res.json({ user: userResponse.data, repos: reposResponse.data });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from GitHub API' });
    }
});

// Route to get repo details and last 5 commits
app.get('/api/repos/:owner/:repo', async (req, res) => {
    try {
        const { owner, repo } = req.params;
        const repoResponse = await axios.get(`${githubApiUrl}/repos/${owner}/${repo}`, {
            headers: { Authorization: `token ${token}` }
        });
        const commitsResponse = await axios.get(`${githubApiUrl}/repos/${owner}/${repo}/commits`, {
            headers: { Authorization: `token ${token}` }
        });
        res.json({ repo: repoResponse.data, commits: commitsResponse.data.slice(0, 5) });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from GitHub API' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
