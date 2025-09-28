import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
  };

  // Inline styles as fallback
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    },
    card: {
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '420px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    title: {
      fontSize: '28px',
      fontWeight: '700',
      marginBottom: '8px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center'
    },
    subtitle: {
      color: '#666',
      marginBottom: '32px',
      textAlign: 'center'
    },
    inputGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
      color: '#333'
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      border: '2px solid #e2e8f0',
      borderRadius: '10px',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(135deg, #4299e1, #3182ce)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginBottom: '24px'
    },
    signupSection: {
      textAlign: 'center',
      color: '#666'
    },
    link: {
      color: '#4299e1',
      textDecoration: 'none',
      fontWeight: '600',
      marginLeft: '4px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Sign in to your GiftCardPro account</p>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username or Email</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username or email"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={styles.input}
              required
            />
          </div>

          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
            <label style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember me
            </label>
            <a href="/forgot-password" style={styles.link}>
              Forgot password?
            </a>
          </div>

          <button type="submit" style={styles.button}>
            Sign In
          </button>
        </form>

        <div style={styles.signupSection}>
          New to GiftCardPro?{' '}
          <a href="/register" style={styles.link}>
            Create your account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
