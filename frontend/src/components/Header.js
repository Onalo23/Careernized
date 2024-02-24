// Header.js
import React from 'react';
import '../styles/Header.css';
import logoImage from './images/careernized_logo-removebg-preview.png';

function Header() {
  return (
    <header className="container">
      <div className="flex1">
      <img src={logoImage} alt="My Image" style={{borderRadius: '100px', width: '100px'}} />
        <h1>We are Crafting Careers from Passion to Profession</h1>
      </div>
    </header>
  );
}

export default Header;
