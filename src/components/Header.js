import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>The Molti Online Store</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
