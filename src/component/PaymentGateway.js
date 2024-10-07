import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './PaymentGateway.css'; // Ensure you have a separate CSS file for additional styles

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  // Animation for the form content
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 }
  });

  const handleCheckout = (e) => {
    e.preventDefault();
    // Basic card number validation
    if (!/^\d{16}$/.test(cardNumber)) {
      alert('Please enter a valid 16-digit card number.');
      return;
    }

    // Here you would normally process the payment
    alert('Payment processed for card number: ' + cardNumber);
  };

  return (
    <div className="gateway-container">
      <header className="gateway-header">
        <h1>Welcome to the Professional Page</h1>
        <p>Your one-stop solution for all your needs.</p>
      </header>
      <animated.div style={fadeIn} className="payment-form-container">
        <h2>Payment Gateway</h2>
        <form onSubmit={handleCheckout} className="payment-form">
          <div className="input-group">
            <label>Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter your 16-digit card number"
              required
            />
          </div>
          <div className="input-group">
            <label>Expiration Date:</label>
            <input
              type="text"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="input-group">
            <label>CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="Enter CVV"
              required
            />
          </div>
          <div className="input-group">
            <label>Billing Address:</label>
            <input
              type="text"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              placeholder="Enter your billing address"
              required
            />
          </div>
          <button type="submit" className="checkout-button">Checkout</button>
        </form>
      </animated.div>
    </div>
  );
};

export default PaymentGateway;
