import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, ShoppingCart, History, User, LogOut, TrendingUp, Shield, Zap } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GiftCardPro
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-xl">
                <User className="h-4 w-4 text-gray-600" />
                <span className="text-gray-700 font-medium">Hi, User</span>
              </div>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-xl transition-colors">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome back! 👋
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Manage your gift card transactions with our secure and fast trading platform
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Wallet Balance</p>
                  <p className="text-3xl font-bold mt-2">$0.00</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-200" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Total Transactions</p>
                  <p className="text-3xl font-bold mt-2">0</p>
                </div>
                <History className="h-8 w-8 text-green-200" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Account Status</p>
                  <p className="text-xl font-bold mt-2 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Verified
                  </p>
                </div>
                <Zap className="h-8 w-8 text-purple-200" />
              </div>
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/buy"
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="bg-green-100 p-4 rounded-2xl inline-flex group-hover:bg-green-200 transition-colors">
                <ShoppingCart className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Buy Gift Cards</h3>
              <p className="text-gray-600 leading-relaxed">
                Get premium gift cards with cryptocurrency. Best rates guaranteed with instant delivery.
              </p>
              <div className="mt-4 text-green-600 font-semibold">
                Get up to 60% bonus!
              </div>
            </Link>

            <Link
              to="/sell"
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="bg-blue-100 p-4 rounded-2xl inline-flex group-hover:bg-blue-200 transition-colors">
                <CreditCard className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Sell Gift Cards</h3>
              <p className="text-gray-600 leading-relaxed">
                Sell your gift cards for instant cash. Fast verification and immediate payment.
              </p>
              <div className="mt-4 text-blue-600 font-semibold">
                Get paid instantly!
              </div>
            </Link>

            <Link
              to="/transactions"
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="bg-orange-100 p-4 rounded-2xl inline-flex group-hover:bg-orange-200 transition-colors">
                <History className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Transaction History</h3>
              <p className="text-gray-600 leading-relaxed">
                View all your buy and sell transactions with detailed status and timestamps.
              </p>
              <div className="mt-4 text-orange-600 font-semibold">
                Real-time updates
              </div>
            </Link>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Recent Activity</h3>
              <Link
                to="/transactions"
                className="text-blue-600 hover:text-blue-500 font-semibold flex items-center"
              >
                View All
                <History className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="text-center py-12">
              <History className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No transactions yet</p>
              <p className="text-gray-400 mt-2">
                Start by buying or selling gift cards to see your activity here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
