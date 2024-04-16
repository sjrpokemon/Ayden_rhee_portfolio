// controllers/stockController.js
const Stock = require('../models/stock');  // Ensure the path is correct

exports.getPredictions = async (req, res) => {
  try {
    const { ticker } = req.params;
    // Use the Stock model to query for prediction data related to the given ticker
    // You need to adjust the query based on how your predictions are stored
    const predictions = await Stock.find({ ticker: ticker }).exec();
    res.json(predictions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
