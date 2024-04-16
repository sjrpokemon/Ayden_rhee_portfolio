// routes/stockRoutes.js
const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

// Other routes...

// Route to get prediction data for a given ticker
router.get('/predictions/:ticker', stockController.getPredictions);

module.exports = router;
