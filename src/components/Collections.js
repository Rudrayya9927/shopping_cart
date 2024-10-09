// src/Components/Collections.js
import React from 'react';
import './Collections.css';
import wowen from "../images/women-fashion.png";
import men from "../images/men-fashion.png";
import simple from "../images/simple.png";
function Collections() {
  return (
    <section className="collections">
      <div className="collection-card">
        <div className='flex'>

        <div className="collection-card-content">
          <h3>Woman Collection</h3>
          <p>Find the perfect outfit for any occasion.</p>
        </div>
        <img src={wowen} alt="Women Collection" className="collection-image" />
        </div>
      </div>
      <div className="collection-card">
        <div className='flex'>
        <div className="collection-card-content">
          <h3>Man Collection</h3>
          <p>Explore top-trending men's fashion wear.</p>
        </div>
        <img src={men} alt="Men Collection" className="collection-image" />
        </div>
      </div>

      <div className="collection-card">
        <div className='flex'>
        <div className="collection-card-content">
          <h3>Fashion Collection</h3>
          <p>Discover the latest styles in fashion trends.</p>
        </div>
        <img src={simple} alt="Fashion Collection" className="collection-image" />
        </div>
      </div>
    </section>
  );
}

export default Collections;
