import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  // Email Validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.email || !formData.password) {
      setError("Please fill all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Invalid email format.");
      return;
    }

    // ======================
    // REGISTRATION LOGIC
    // ======================
    if (!isLogin) {
      if (!formData.name) {
        setError("Full name is required.");
        return;
      }

      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      // Get existing users
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if email already exists
      const userExists = users.find(
        (user) => user.email === formData.email
      );

      if (userExists) {
        setError("Email already registered.");
        return;
      }

      // Save new user
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      localStorage.setItem("users", JSON.stringify([...users, newUser]));

      alert("Registration Successful! Please login.");
      setIsLogin(true);
      return;
    }

    // ======================
    // LOGIN LOGIC
    // ======================

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (!validUser) {
      setError("Invalid email or password.");
      return;
    }

    // Store logged-in user
    localStorage.setItem("currentUser", JSON.stringify(validUser));

    alert("Login Successful!");

    // ✅ Navigate to Home Page
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "User Login" : "User Registration"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {!isLogin && (
            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="auth-footer">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
          >
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;