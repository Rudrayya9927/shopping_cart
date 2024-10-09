import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>Get 20% off all Products</p>
        <h2>The Molti Online Store</h2>
        <p>
          Explore our wide range of exclusive fashion collections. Special
          discount for a limited time!
        </p>
        <button className="btn" style={{color:"orange",backgroundColor:"white",padding:10}}>See New Products</button>
      </div>
      <div className="hero-image">
        {/* Add image here */}
      </div>
    </section>
  );
}

export default Hero;
