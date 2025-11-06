import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-container">
        <div className="footer-section about">
          <p>
            <strong>About Us</strong><br />
            Nestled in the lush wilderness, Teakwood Forest Resort & Camp offers
            a serene escape where comfort meets nature. Perfect for families,
            corporate retreats, and group getaways.
          </p>
        </div>

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
            <a href="mailto:teakwoodcamping@gmail.com" className="footer-link">
              teakwoodcamping@gmail.com
            </a>
          </p>
          <p>S. No. 38, Malegaon-Salawade Road, Bhor, Pune, Maharashtra 412213</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a
                href="https://forms.gle/AjrU4PBWJeNkJW5d8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inquiry Form
              </a>
            </li>
            <li>
              <a
                href="https://forms.gle/RfP5kVxo18WwJbao8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Booking Form
              </a>
            </li>
            <li>
              <a
                href="https://forms.gle/Pz7xGo7upCrm37ZPA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guest Details
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Teakwood Forest Resort & Camp — All Rights Reserved |{" "}
          <Link to="/terms" className="footer-link">
            Terms & Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;