import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="main-header">
      <div className="logo">
        <h1>Fast<span>Bites</span></h1>
      </div>

      {/* Nav links with conditional class for mobile */}
      <nav className={isMobile ? "nav-links-mobile" : "nav-links"} 
           onClick={() => setIsMobile(false)}>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#offers">Offers</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="header-actions">
        <div className="cart-container">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">3</span>
        </div>
        <button className="order-btn">Order Now</button>
        
        {/* Simple Hamburger Icon for Mobile */}
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? '✖' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;