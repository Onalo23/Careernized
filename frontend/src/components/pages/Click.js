import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Click = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false); // Ensure only one form is displayed at a time
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false); // Ensure only one form is displayed at a time
  };

  return (
    <div className='container'>
      <div className='click'>
      <h3 id="join">Click the button to join my class</h3>
      <button className='button-1' onClick={handleLoginClick}>Login</button>
      <button className='button-1' onClick={handleRegisterClick}>Register</button>

      {/* Display the login form only if showLoginForm is true */}
      {showLoginForm && <Login />}

      {/* Display the register form only if showRegisterForm is true */}
      {showRegisterForm && <Register />}
    </div>
    </div>
  );
};

export default Click;
