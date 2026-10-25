
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar border-bottom bg-white">
      <div className="container py-2 d-flex justify-content-between align-items-center">

        <Link to="/" className="navbar-brand">
          <img
            src="/media/logo.svg"
            style={{ width: "120px" }}
            alt="TradeSphere Logo"
          />
        </Link>

        <div className="d-flex align-items-center gap-4 flex-wrap">
          <Link className="nav-link" to="/signup">
            Signup
          </Link>

          <Link className="nav-link" to="/about">
            About
          </Link>

          <Link className="nav-link" to="/product">
            Product
          </Link>

          <Link className="nav-link" to="/pricing">
            Pricing
          </Link>

          <Link className="nav-link" to="/support">
            Support
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
