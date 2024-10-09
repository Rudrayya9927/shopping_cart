// src/Components/CustomerSatisfaction.js
import React from 'react';
import './Satisfaction.css';
import lineChat from "../images/live-chat.png";
import freeSheeping from "../images/free-shipping.png";
import securepayment from "../images/secure-checkout.png";

function CustomerSatisfaction() {
  return (
    <section className="customer-satisfaction">
      <h2>Customer <span style={{ color: "#ff5c00"}}>Satisfaction</span></h2>
      <p>We are committed to providing our customers with the best possible service.</p>

      <div className="satisfaction-grid">
        <div className="satisfaction-item">
          <img src={lineChat} alt="Live Chat Icon" />
          <h3>24/7 Live Chat</h3>
          <p>Talk to us anytime, anywhere.</p>
        </div>

        <div className="satisfaction-item">
          <img src={freeSheeping} alt="Free Shipping Icon" />
          <h3>Free Shipping</h3>
          <p>Fast and free delivery on all orders.</p>
        </div>

        <div className="satisfaction-item">
          <img src={securepayment} alt="Secure Checkout Icon" />
          <h3>Secure Checkout</h3>
          <p>We ensure secure payment processing.</p>
        </div>
      </div>
    </section>
  );
}

export default CustomerSatisfaction;
