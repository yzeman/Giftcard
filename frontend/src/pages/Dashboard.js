import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, ShoppingCart, CreditCard, History, User } from 'lucide-react';
import axios from 'axios';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/transactions/my-transactions');
      setTransactions(response.data.slice(0, 5)); // Show latest 5
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">GiftCardPro</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">Hi, {user?.username}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.username}! 👋
            </h2>
            <p className="text-gray-600">Manage your gift card transactions with ease</p>
          </motion.div>

          {/* Wallet Balance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white mb-8 shadow-lg"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-blue-100">Wallet Balance</p>
                <p className="text-4xl font-bold mt-2">${user?.walletBalance?.toFixed(2) || '0.00'}</p>
              </div>
              <div className="text-right">
                <p className="text-blue-100">Account Status</p>
                <p className="text-lg font-semibold mt-2">Verified ✅</p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <motion(Link)
              to="/buy"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-sm border p-6 text-center hover:shadow-md transition-shadow duration-200 group"
            >
              <ShoppingCart className="h-12 w-12 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Buy Gift Cards</h3>
              <p className="text-gray-600">Get premium gift cards with crypto</p>
            </motion(Link>

            <motion(Link)
              to="/sell"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-sm border p-6 text-center hover:shadow-md transition-shadow duration-200 group"
            >
              <CreditCard className="h-12 w-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sell Gift Cards</h3>
              <p className="text-gray-600">Sell your cards for instant cash</p>
            </motion(Link>

            <motion(Link)
              to="/transactions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-sm border p-6 text-center hover:shadow-md transition-shadow duration-200 group"
            >
              <History className="h-12 w-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transaction History</h3>
              <p className="text-gray-600">View all your transactions</p>
            </motion(Link>
          </motion.div>

          {/* Recent Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Recent Transactions</h3>
              <Link
                to="/transactions"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                View All
              </Link>
            </div>
            
            {transactions.length > 0 ? (
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div
                    key={transaction._id}
                    className="flex justify-between items-center p-4 border rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-900">
                        {transaction.cardType} - {transaction.type}
                      </p>
                      <p className="text-sm text-gray-500">
                        ${transaction.amountSent} → ${transaction.amountReceived}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        transaction.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : transaction.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <History className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No transactions yet</p>
                <p className="text-sm text-gray-400 mt-1">
                  Start by buying or selling gift cards
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
