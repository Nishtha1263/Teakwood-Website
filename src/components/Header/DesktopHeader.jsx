// src/components/Header/DesktopHeader.jsx
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./DesktopHeader.css";

export default function DesktopHeader() {
  return (
    <header className="desktop-header">
      <div className="header-container">
        <div className="logo-name">
          <Link to="/" className="logo">
            <img src={logo} alt="Teakwood Logo" />
          </Link>
          <h4>Teakwood Forest Resort and Camp</h4>
        </div>
        <nav className="nav-links">
          <NavLink to="/" className="nav-item">Home</NavLink>
          <NavLink to="/packages" className="nav-item">Packages</NavLink>
          <NavLink to="/stay" className="nav-item">Stay</NavLink>
          <NavLink to="/activities" className="nav-item">Activities</NavLink>
          <NavLink to="/events" className="nav-item">Events</NavLink>
          <NavLink to="/contact" className="nav-item">Contact Us</NavLink>
        </nav>
        <div className="header-buttons">
          <a href="/brochure.pdf" download className="desktop-book-btn">
            Download Brochure
          </a>
          <Link to="/book" className="desktop-book-btn">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
