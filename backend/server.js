const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const stockRoutes = require('./routes/stockRoutes'); // Using routes from stockRoutes.js

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGODB_URI; // Set your database URI in .env file

// Updated connection string without deprecated options
mongoose.connect(DB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());

// Use the routes defined in stockRoutes.js
app.use('/api', stockRoutes); // Prefixed with '/api' for API versioning

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
