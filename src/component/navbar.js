// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management
import "./nav.css";

const Navbar = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const cartItemCount = cartItems ? cartItems.length : 0;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Collection</Link>
    

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-dark me-2">Login</Link>
            <Link to="/register" className="btn btn-outline-dark me-2">Register</Link>
            <Link to="/cart" className="btn btn-outline-dark">
              <i className="fa fa-shopping-cart me-1"></i> Cart ({cartItemCount})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;