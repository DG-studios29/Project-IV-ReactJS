const express = require('express');
const { Octokit } = require('@octokit/rest');
const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Octokit with access token
const octokit = new Octokit({ auth: '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' });

app.use(express.json());

// Define routes
app.get('/api/user/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const { data } = await octokit.users.getByUsername({ username });
    res.json(data);
  } catch (error) {
    console.error('Error fetching user details:', error.message);
    res.status(error.status || 500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
