// Navigation.js
import React from 'react';
import '../styles/Navigation.css';
import bodyImage from './images/career_images-removebg-preview.png';

function NavMain() {
  return (
    <div className='container'>
    <div className='grid'>
    <nav className="grid1">
      <ul>
        <li><a className="current" href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        
      </ul>
    </nav>
    <main className="container">
    <div className="grid1" style={{ marginTop: '20px', alignItems: 'center', textAlign: 'center' }}>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Careernized is here for your career decisions</p>
      <p>Feel free to tell us<br />your hobby and we will gladly<br /> guide you to your profession</p>
      <img src={bodyImage} alt="My Image" />
    </div>
  </main></div></div>
  );
}

export default NavMain;
