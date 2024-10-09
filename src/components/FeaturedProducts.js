import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart hook
import './FeaturedProducts.css'; // Import CSS file
import blue from "../images/blue.jpeg";
import yellow from "../images/yellow.png"
import brown from "../images/nike-brown.png"
import nike from "../images/nike.png"
import { useNavigate } from 'react-router-dom';

const FeaturedProducts = () => {
  const { addToCart } = useCart(); // Access addToCart from context
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "Red Hoodie", price: 49.99, image: blue,rating:4 },
    { id: 2, name: "Black T-shirt", price: 29.99, image: yellow,rating:4 },
    { id: 3, name: "White Sneakers", price: 59.99, image: brown,rating:4 },
    { id: 4, name: "Blue Cap", price: 19.99, image: nike,rating:4 },
    // Add more products as needed
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart'); // Navigate to Cart page
  };
  return (
    <div className="featured-products">
      <h2 className="featured-products__title">Featured Products</h2>
      <div className="featured-products__grid">
        {products.map(product => (
          <div className="featured-product" key={product.id}>
            <img src={product.image} alt={product.name} className="featured-product__image" />
            <h3 className="featured-product__name">{product.name}</h3>
            <p className="featured-product__price">${product.price.toFixed(2)}</p>
            <div className="featured-product__rating">
              {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
            </div>
            <button 
              className="add-to-cart-button" 
              onClick={() => {handleAddToCart(product)}} // Add product to cart
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
