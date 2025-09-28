import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 p-4">
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Reset Password
          </h1>
          <p className="text-gray-600 mt-2">
            {isSubmitted 
              ? "Check your email for instructions" 
              : "Enter your email to reset your password"
            }
          </p>
        </div>

        {!isSubmitted ? (
          /* Reset Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                required
                disabled={isLoading}
              />
              <p className="text-gray-500 text-sm mt-2">
                We'll send a password reset link to this email
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-200 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending...
                </div>
              ) : (
                'Send Reset Link'
              )}
            </button>
          </form>
        ) : (
          /* Success Message */
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">Check Your Email</h3>
              <p className="text-gray-600">
                We've sent a password reset link to:<br />
                <span className="font-medium text-gray-800">{email}</span>
              </p>
              <p className="text-gray-500 text-sm">
                The link will expire in 1 hour
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleBackToLogin}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition duration-200"
              >
                Back to Login
              </button>
              
              <p className="text-gray-500 text-sm">
                Didn't receive the email?{' '}
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-orange-600 hover:text-orange-500 font-medium"
                >
                  Resend
                </button>
              </p>
            </div>
          </div>
        )}

        {/* Back to Login Link */}
        {!isSubmitted && (
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Remember your password?{' '}
              <Link 
                to="/login" 
                className="text-orange-600 hover:text-orange-500 font-semibold transition duration-200"
              >
                Back to Login
              </Link>
               // In the success section, add this button:
<Link 
  to="/reset-password" 
  className="text-orange-600 hover:text-orange-500 font-medium"
>
  Proceed to Reset Password
</Link>   
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
