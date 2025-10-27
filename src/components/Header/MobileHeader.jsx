// src/components/Header/MobileHeader.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./MobileHeader.css";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mobile-header">
      <div className="mobile-header-top">
        <Link to="/" className="logo">
          <img src={logo} alt="Teakwood Logo" />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/packages" onClick={() => setMenuOpen(false)}>Packages</NavLink>
          <NavLink to="/experiences" onClick={() => setMenuOpen(false)}>Experiences</NavLink>
          <NavLink to="/stay" onClick={() => setMenuOpen(false)}>Stay</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="book-btn">
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}
