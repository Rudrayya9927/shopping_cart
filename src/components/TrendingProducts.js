// src/Components/TrendingProducts.js
import React from 'react';
import { useCart } from '../context/CartContext'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './TrendingProducts.css';
import blue from "../images/blue.jpeg";
import yellow from "../images/yellow.png"
import brown from "../images/nike-brown.png"
import nike from "../images/nike.png"

function TrendingProducts() {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate

  const products = [
    { id: 1, name: "Red Hoodie", price: 49.99, image: blue },
    { id: 2, name: "Black T-shirt", price: 29.99, image: yellow },
    { id: 3, name: "White Sneakers", price: 59.99, image: brown },
    { id: 4, name: "Blue Cap", price: 19.99, image: nike },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart'); // Navigate to Cart page
  };

  return (
    <section className="trending-products">
      <h2>Trending Products</h2>
      <p>Check out the most popular items among our customers!</p>

      <div className="trending-grid">
        {products.map((product) => (
          <div className="trending-card" key={product.id}>
            <img src={product.image} alt={product.name} className="trending-image" />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button className="view-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingProducts;
