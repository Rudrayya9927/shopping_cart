import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext'; // Import the useCart hook
import './Cart.css'; // Create a separate CSS file for styling

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useCart(); // Access cartItems and setCartItems from context

  // Calculate subtotal and total
  const calculateTotals = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return subtotal;
  };

  // Update quantity in cart items
  const handleQuantityChange = (index, quantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = Math.max(1, quantity); // Prevent quantity from being less than 1
    setCartItems(updatedCartItems);
  };

  // Set initial cart items when component mounts
  useEffect(() => {
    // This is where you can set initial cart items if needed
  }, []);

  const subtotal = calculateTotals();

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart__title">
        Shopping <span className="highlight">Cart</span>
      </h2>
      <div className="shopping-cart__content">
        <div style={{ display: 'flex', gap: 100 }}>
          <table className="shopping-cart__table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="product">
                    <img src={item.image} alt={item.name} className="product-image" />
                    <span>{item.name}</span>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                      className="quantity-input"
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-totals">
            <div className="totals-content">
              <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
              <p>Total: <span>${subtotal.toFixed(2)}</span></p>
            </div>
            <button className="checkout-button">PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="coupon">
          <input type="text" placeholder="Coupon code" className="coupon-input" />
          <button className="apply-coupon-button">APPLY COUPON</button>
        </div>
      </div>
      <div className="services">
        <div className="service">
          <div className="service-icon"></div>
          <h4>24/7 Live Chat</h4>
          <p>Maecenas tempus tellus eget condimentum rhoncus sem quam se.</p>
        </div>
        <div className="service">
          <div className="service-icon"></div>
          <h4>Free Shipping</h4>
          <p>Maecenas tempus tellus eget condimentum rhoncus sem quam se.</p>
        </div>
        <div className="service">
          <div className="service-icon"></div>
          <h4>Secure Checkout</h4>
          <p>Maecenas tempus tellus eget condimentum rhoncus sem quam se.</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
