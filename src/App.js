import React from 'react';
import PaymentGateway from './component/PaymentGateway'; // Ensure this path matches your file structure
import './App.css'; // Optional: Add any global styles here

const App = () => {
  return (
    <div className="app-container">
      <PaymentGateway />
    </div>
  );
};

export default App;
