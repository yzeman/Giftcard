import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded mr-3"></div>
              <h1 className="text-2xl font-bold text-gray-900">GiftCardPro</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-5 w-5 bg-gray-400 rounded"></div>
                <span className="text-gray-700">Hi, User</span>
              </div>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back! 👋
            </h2>
            <p className="text-gray-600">Manage your gift card transactions with ease</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white mb-8 shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-blue-100">Wallet Balance</p>
                <p className="text-4xl font-bold mt-2">$0.00</p>
              </div>
              <div className="text-right">
                <p className="text-blue-100">Account Status</p>
                <p className="text-lg font-semibold mt-2">Verified ✅</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="h-12 w-12 bg-green-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Buy Gift Cards</h3>
              <p className="text-gray-600">Get premium gift cards with crypto</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="h-12 w-12 bg-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sell Gift Cards</h3>
              <p className="text-gray-600">Sell your cards for instant cash</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="h-12 w-12 bg-orange-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transaction History</h3>
              <p className="text-gray-600">View all your transactions</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Recent Transactions</h3>
              <a href="/transactions" className="text-blue-600 hover:text-blue-500 font-medium">
                View All
              </a>
            </div>
            
            <div className="text-center py-8">
              <div className="h-12 w-12 bg-gray-400 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-500">No transactions yet</p>
              <p className="text-sm text-gray-400 mt-1">
                Start by buying or selling gift cards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
