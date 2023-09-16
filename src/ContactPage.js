import React, { useState } from 'react';
import { submitContactForm } from './api/contactApi'; // Adjust the path as needed

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [apiResponse, setApiResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;   
  };

  const validateEmail = (email) => {
    // Simple email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {    
   // should validate email => validateEmail()
   // then submit
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>  
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`form-control ${isValidEmail ? '' : 'is-invalid'}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {!isValidEmail && (
              <div className="invalid-feedback">Please enter a valid email address.</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>   
    </div>
  );
};

export default Contact;
