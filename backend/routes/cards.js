const express = require('express');
const router = express.Router();

// Get available card types
router.get('/', (req, res) => {
  const cardTypes = [
    'Apple Gift Card',
    'Amazon Gift Card', 
    'Steam Gift Card',
    'Google Play Gift Card',
    'Xbox Gift Card',
    'PlayStation Gift Card'
  ];
  res.json(cardTypes);
});

module.exports = router;
