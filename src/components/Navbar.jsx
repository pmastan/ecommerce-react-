import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();   // ✅ added

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");  // ✅ remove logged user
    alert("Logged out successfully!");
    navigate("/");   // ✅ go to home page
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>E-Shop</h2>
      </div>

      <ul className="nav-links">
        <li className={isActive("/")}>
          <Link to="/">Home</Link>
        </li>

        <li className={isActive("/vendor")}>
          <Link to="/vendor">Vendor</Link>
        </li>

        <li className={isActive("/orders")}>
          <Link to="/orders">Orders</Link>
        </li>

        <li>
          <Link to="/cart">
            Cart <span className="cart-badge">{cart.length}</span>
          </Link>
        </li>

        <li className={isActive("/Profile")}>
          <Link to="/Profile">Profile</Link>
        </li>

        {/* ✅ Logout Button (only show if logged in) */}
        {currentUser && (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;