const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
  invoiceId: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Paid', 'Pending'], required: true },
  amount: { type: Number, required: true },
});

const sale = mongoose.model('sale', salesSchema);

module.exports = sale;
