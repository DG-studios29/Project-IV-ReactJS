const express = require('express');
const helmet = require('helmet');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000; // You can choose any port number

app.use(express.json());
app.use(helmet());

// Define your API routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});