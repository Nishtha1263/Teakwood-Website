// src/components/Header/DesktopHeader.jsx
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./DesktopHeader.css";

export default function DesktopHeader() {
  return (
    <header className="desktop-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Teakwood Logo" />
        </Link>
        <nav className="nav-links">
          <NavLink to="/" className="nav-item">Home</NavLink>
          <NavLink to="/packages" className="nav-item">Packages</NavLink>
          <NavLink to="/experiences" className="nav-item">Experiences</NavLink>
          <NavLink to="/stay" className="nav-item">Stay</NavLink>
          <NavLink to="/contact" className="nav-item">Contact Us</NavLink>
        </nav>
        <Link to="/contact" className="book-btn">
          Book Now
        </Link>
      </div>
    </header>
  );
}
