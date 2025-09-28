const express = require('express');
const auth = require('../middleware/auth');
const Transaction = require('../models/Transaction');
const axios = require('axios');
const config = require('../config');  // ADD THIS LINE

const router = express.Router();

// Update the sendToTelegram function:
async function sendToTelegram(message) {
  const botToken = config.TELEGRAM_BOT_TOKEN;  // CHANGED THIS LINE
  const chatId = config.TELEGRAM_CHAT_ID;      // CHANGED THIS LINE
  
  if (!botToken || !chatId) {
    console.log('Telegram credentials not configured');
    return;
  }
  
  try {
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await axios.post(telegramUrl, {
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML'
    });
    console.log('Message sent to Telegram successfully');
  } catch (error) {
    console.error('Error sending to Telegram:', error.response?.data || error.message);
  }
}

// ... rest of your transactions code

// Get user transactions
router.get('/my-transactions', auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id })
      .sort({ createdAt: -1 });
    
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions' });
  }
});

// Create buy transaction
router.post('/buy', auth, async (req, res) => {
  try {
    const { cardType, amountSent, deliveryOption, btcAddress } = req.body;
    
    // Calculate amount received based on your business rules
    const amountReceived = calculateAmountReceived(amountSent);
    
    const transaction = await Transaction.create({
      user: req.user.id,
      type: 'buy',
      cardType,
      amountSent,
      amountReceived,
      deliveryOption,
      btcAddress,
      status: 'pending'
    });

    // Send to Telegram (you'll need to set up a bot)
    await sendToTelegram(`New buy transaction: ${cardType} for $${amountSent}`);

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Error creating buy transaction' });
  }
});

// Create sell transaction
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
const upload = multer({ storage: storage });

router.post('/sell', auth, upload.fields([
  { name: 'frontImage', maxCount: 1 },
  { name: 'backImage', maxCount: 1 }
]), async (req, res) => {
  try {
    const { cardType, amountSent, cardCode } = req.body;
    const frontImage = req.files['frontImage'] ? req.files['frontImage'][0].filename : null;
    const backImage = req.files['backImage'] ? req.files['backImage'][0].filename : null;

    if (!frontImage || !backImage) {
      return res.status(400).json({ message: 'Please upload both front and back card images' });
    }

    const amountReceived = calculateAmountReceived(amountSent);
    
    const transaction = await Transaction.create({
      user: req.user.id,
      type: 'sell',
      cardType,
      amountSent,
      amountReceived,
      cardImages: {
        front: frontImage,
        back: backImage
      },
      cardCode,
      status: 'processing'
    });

    // Send to Telegram
    await sendToTelegram(`
New sell transaction:
Card: ${cardType}
Amount: $${amountSent}
User: ${req.user.username}
    `);

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Error creating sell transaction' });
  }
});

// Helper functions
function calculateAmountReceived(amountSent) {
  // Your business logic here
  if (amountSent === 50) return 80;
  if (amountSent === 100) return 150;
  return amountSent * 1.6; // 60% bonus
}

async function sendToTelegram(message) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  if (!botToken || !chatId) return;
  
  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message
    });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
  }
}

module.exports = router;
