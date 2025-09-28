import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Bitcoin, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BuyCard = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardType: '',
    amountSent: '',
    deliveryOption: 'code_only',
    btcAddress: ''
  });

  const cardTypes = [
    'Apple Gift Card',
    'Amazon Gift Card',
    'Steam Gift Card',
    'Google Play Gift Card',
    'Xbox Gift Card',
    'PlayStation Gift Card'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateAmountReceived = (amount) => {
    const amounts = {
      50: 80,
      100: 150,
      200: 320,
      500: 800
    };
    return amounts[amount] || Math.round(amount * 1.6);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('http://localhost:5000/api/transactions/buy', {
        ...formData,
        amountSent: parseInt(formData.amountSent)
      });
      
      setStep(2);
      
      // Simulate payment verification delay
      setTimeout(() => {
        setStep(3);
      }, 180000); // 3 minutes
      
    } catch (error) {
      alert('Error creating transaction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            to="/dashboard"
            className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Buy Gift Card</h1>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div
                  className={`w-20 h-1 mx-2 ${
                    step > stepNumber ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Form */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-sm border p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Card Type
                </label>
                <select
                  name="cardType"
                  value={formData.cardType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose a card type</option>
                  {cardTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount to Send (USD)
                </label>
                <select
                  name="amountSent"
                  value={formData.amountSent}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select amount</option>
                  <option value="50">$50 - Get $80 card</option>
                  <option value="100">$100 - Get $150 card</option>
                  <option value="200">$200 - Get $320 card</option>
                  <option value="500">$500 - Get $800 card</option>
                </select>
                {formData.amountSent && (
                  <p className="mt-2 text-green-600 font-medium">
                    You will receive: ${calculateAmountReceived(parseInt(formData.amountSent))} gift card
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Option
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="code_only"
                      checked={formData.deliveryOption === 'code_only'}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    Code Only
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="full_card"
                      checked={formData.deliveryOption === 'full_card'}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    Full Card (Front & Back Images + Code)
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Bitcoin Address
                </label>
                <input
                  type="text"
                  name="btcAddress"
                  value={formData.btcAddress}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Bitcoin address for payment"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {loading ? 'Processing...' : 'Continue to Payment'}
              </motion.button>
            </form>
          </motion.div>
        )}

        {/* Step 2: Payment Instructions */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-sm border p-6 text-center"
          >
            <Bitcoin className="h-16 w-16 text-orange-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Instructions
            </h2>
            <p className="text-gray-600 mb-6">
              Please send <strong>${formData.amountSent}</strong> in Bitcoin to the address below:
            </p>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="font-mono text-sm break-all">
                bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
              </p>
            </div>

            <div className="flex items-center justify-center text-orange-600 mb-6">
              <Clock className="h-5 w-5 mr-2" />
              <span>Waiting for payment confirmation...</span>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6"
            />
          </motion.div>
        )}

        {/* Step 3: Payment Result */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-sm border p-6 text-center"
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Received!
            </h2>
            <p className="text-gray-600 mb-6">
              Your ${calculateAmountReceived(parseInt(formData.amountSent))} {formData.cardType} has been sent to your email.
            </p>
            <Link
              to="/dashboard"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Back to Dashboard
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BuyCard;
