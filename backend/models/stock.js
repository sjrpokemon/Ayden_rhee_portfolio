// models/Stock.js
const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  date: Date,
  ticker: String,
  open: Number,
  high: Number,
  low: Number,
  close: Number,
  volume: Number
});

module.exports = mongoose.model('Stock', StockSchema);
