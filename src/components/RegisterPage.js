import React, { useState } from "react";
import "../register.css"; // Custom CSS for styling
import Navbar from "../Navbar.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error message
    setError("");

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // If passwords match, handle the registration logic (e.g., API call)
    alert("Registration successful!");
  };

  return (
    <div>
      {<Navbar />}
      <div className="register-page">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="ripple-input" // Use Ripple UI class for input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="ripple-input" // Use Ripple UI class for input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              className="ripple-input" // Use Ripple UI class for input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="ripple-button ripple-button-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
