import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import './PaymentMethod.css';

const PaymentMethod = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { services } = useAuth();
  const [selectedMethod, setSelectedMethod] = useState(null);

  const course = services.find(service => service._id === courseId);

  const paymentMethods = [
    {
      id: 'credit_card',
      name: 'Credit Card',
      icon: '💳',
      description: 'Pay with your credit or debit card'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: '🔵',
      description: 'Pay securely with PayPal'
    },
    {
      id: 'bank_transfer',
      name: 'Bank Transfer',
      icon: '🏦',
      description: 'Direct bank transfer'
    }
  ];

  const handleContinue = () => {
    if (selectedMethod) {
      navigate(`/payment-info/${courseId}/${selectedMethod}`);
    }
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="payment-method-container">
      <div className="payment-header">
        <h1>Choose Payment Method</h1>
        <div className="course-summary">
          <h2>{course.service}</h2>
          <p className="price">${course.price}</p>
        </div>
      </div>

      <div className="payment-methods">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`payment-option ${selectedMethod === method.id ? 'selected' : ''}`}
            onClick={() => setSelectedMethod(method.id)}
          >
            <div className="method-icon">{method.icon}</div>
            <div className="method-info">
              <h3>{method.name}</h3>
              <p>{method.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="continue-btn"
        onClick={handleContinue}
        disabled={!selectedMethod}
      >
        Continue to Payment
      </button>
    </div>
  );
};

export default PaymentMethod; 