const config = require('./config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database connection - USING CONFIG INSTEAD OF process.env
mongoose.connect(config.MONGODB_URI || 'mongodb://localhost:27017/giftcard_marketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/transactions', require('./routes/transactions'));
app.use('/api/cards', require('./routes/cards'));
app.use('/api/users', require('./routes/users'));

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong!' });
});

// USING CONFIG INSTEAD OF process.env
const PORT = config.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
