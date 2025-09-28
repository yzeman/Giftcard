import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">GiftCardPro</h1>
            <div className="text-gray-700">Hi, User</div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back! 👋
            </h2>
            <p className="text-gray-600">Manage your gift card transactions</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white mb-8 shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-blue-100">Wallet Balance</p>
                <p className="text-4xl font-bold mt-2">$0.00</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border p-6 text-center hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Buy Gift Cards</h3>
              <p className="text-gray-600">Get premium gift cards with crypto</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-6 text-center hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sell Gift Cards</h3>
              <p className="text-gray-600">Sell your cards for instant cash</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-6 text-center hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transaction History</h3>
              <p className="text-gray-600">View all your transactions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
