import React from "react";
import {Link} from "react-router-dom";
import "./ContactInfo.css";
import bg from "/hero1.webp"; 
import SEO from "./SEO";

const ContactInfo = () => {
  return (
    <section
      className="contact-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <SEO
        title="Contact Teakwood Forest Resort – Get in Touch for Bookings & Queries"
        description="Contact Teakwood Forest Resort and Camp for stay bookings, event inquiries, or group reservations. Reach us easily from Pune – just 1.5 hours away near Bhor."
        keywords="Contact Teakwood Resort, Resort near Bhor Pune, Book resort Pune, Resort contact number Pune, Teakwood camping contact, Resort enquiry Pune, Directions to Teakwood Resort"
        url="https://teakwoodcamping.com/contact"
      />

      <div className="contact-overlay"></div>

      <div className="contact-container">
        <div className="contact-text">
          <h2>Contact Us</h2>
          <p>
            We’d love to hear from you! Reach us through any of the options
            below or fill out the form to plan your stay.
          </p>

          <div className="contact-details">
            <a href="tel:+919881301029" className="contact-link">
              +91 98813 01029
            </a>
            <a href="mailto:teakwoodcamping@gmail.com" className="contact-link">
              teakwoodcamping@gmail.com
            </a>
          </div>

          <div className="map-container">
            <iframe
              title="Teakwood Camping Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.992179150024!2d73.8671009!3d18.2561801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f2e04f14d515%3A0x6b761c5b69beab0c!2sTeakwood%20Forest%20Resort%20and%20Camp!5e0!3m2!1sen!2sin!4v1761666654591!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <Link to="/terms" className="terms-btn">
            Terms & Conditions
          </Link>
        </div>
        <div className="contact-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdrWrzuKbHzpGBTaeV7awXGBlRDoLfZr3cs9X8uBBlZOBdblQ/viewform?embedded=true"
            title="Teakwood Form"
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