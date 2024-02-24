// Login.js
import React, { useState } from 'react';

const Login = () => {
  // Define state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here (e.g., send login request to server)
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields after submission if needed
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form1">
      <form onSubmit={handleSubmit}>
        <h1>LOGIN FORM</h1>
        <input
          className="fill"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          className="fill"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">Submit</button><br /><br />
        <div style={{ display: 'inline-flex', gap: '20px' }}>
          <input type="checkbox" />
          <label style={{ color: '#E3DCD2' }}>Remember me?</label><br />
          <a href="signUp.html" style={{ color: '#CC8B65', textDecoration: 'none' }}>Forgot Password?</a>
        </div>
        <div style={{ display: 'inline-flex', gap: '10px' }}>
          <p style={{ color: '#E3DCD2' }}>Need an Account?</p>
          <button className="button-1"><a className="button-1" style={{ textDecoration: 'none' }} href="register.html">REGISTER</a></button>
        </div>
      </form>
    </div>
  );
};

export default Login;
