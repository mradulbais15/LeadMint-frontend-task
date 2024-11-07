import React, { useState } from "react";
import "../LoginPage.css"; // Custom CSS for styling
import Navbar from "../Navbar.js";


const LoginPage = () => {
  // State variables for email, password, and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Function to handle form validation
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      formErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Validate Password
    if (!password) {
      formErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted");
      // Perform login action here (e.g., API call)
    }
  };

  return (
    <div className="login-page">
        {<Navbar />}
    
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="ripple-input-group">
            <input
              type="email"
              className={`ripple-input ${errors.email ? "error" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          {/* Password Input */}
          <div className="ripple-input-group">
            <input
              type="password"
              className={`ripple-input ${errors.password ? "error" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="ripple-button ripple-button-primary">
            Login
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
