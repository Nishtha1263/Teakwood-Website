import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "/logo.webp";
import "./MobileHeader.css";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mobile-header">
      <div className="mobile-header-top">
        <div className="mobile-logo-name">
            <Link to="/" className="mobile-logo">
              <img src={logo} alt="Teakwood Logo" />
            </Link>
            <h4>Teakwood Forest Resort and Camp</h4>
        </div>
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
          <NavLink to="/stay" onClick={() => setMenuOpen(false)}>Stay</NavLink>
          <NavLink to="/activities" onClick={() => setMenuOpen(false)}>Activities</NavLink>
          <NavLink to="/events" onClick={() => setMenuOpen(false)}>Events</NavLink>
          <NavLink to="/faq" onClick={() => setMenuOpen(false)}>FAQs</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
          <a href="/Brochure.pdf" download className="mobile-book-btn-brochure">
            Download Brochure
          </a>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="mobile-book-btn">
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}