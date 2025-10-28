import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <section className="contact-section">
      <div className="contact-overlay"></div>

      <div className="contact-container">
        <div className="contact-text">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Reach us through any of the options below or fill out the form to plan your stay.</p>

          <div className="contact-details">
            <a href="tel:+919881301029" className="contact-link">
              +91 98813 01029
            </a>
            <a href="mailto:teakwoodcamping@gmail.com" className="contact-link">
              teakwoodcamping@gmail.com
            </a>
            <a
              href="https://maps.app.goo.gl/eJBkMc1jBSdBnjLg7"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              S. No. 38, Malegaon-Salawade Road, Bhor, Pune, Maharashtra 412213
            </a>
          </div>
        </div>

        <div className="contact-form full-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdrWrzuKbHzpGBTaeV7awXGBlRDoLfZr3cs9X8uBBlZOBdblQ/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
