const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['buy', 'sell'],
    required: true
  },
  cardType: {
    type: String,
    required: true
  },
  amountSent: {
    type: Number,
    required: true
  },
  amountReceived: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'processing'],
    default: 'pending'
  },
  btcAddress: {
    type: String
  },
  cardImages: {
    front: String,
    back: String
  },
  cardCode: {
    type: String
  },
  deliveryOption: {
    type: String,
    enum: ['code_only', 'full_card'],
    default: 'code_only'
  },
  paymentVerified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);
