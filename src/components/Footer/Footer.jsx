import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-section about">
          <img src={logo} alt="Teakwood Logo" className="footer-logo" />
          <p>
            Nestled in the lush wilderness,Teakwood Forest Resort & Camp offers
            a serene escape where comfort meets nature. Unwind, explore, and
            reconnect with yourself amidst greenery and tranquility.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>
            <FaPhoneAlt />{" "}
            <a href="tel:+919881301029" className="footer-link">
              +91 98813 01029
            </a>
          </p>
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:teakwoodresort@gmail.com" className="footer-link">
              teakwoodcamping@gmail.com
            </a>
          </p>
          <p>
            Teakwood Forest Resort & Camp, <br />
            Pune, Maharashtra, India
          </p>
        </div>

        <div className="footer-section map">
          <h4>Find Us</h4>
          <div className="map-wrapper">
            <iframe
              title="Teakwood Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.992179150024!2d73.8671009!3d18.2561801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f2e04f14d515%3A0x6b761c5b69beab0c!2sTeakwood%20Forest%20Resort%20and%20Camp!5e0!3m2!1sen!2sin!4v1761562359675!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Teakwood Forest Resort & Camp — All Rights Reserved |
          <Link to="/terms" className="footer-link"> Terms & Conditions </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
