import React from "react";
import "./ContactHome.css";
import trekBg from "/hero1.webp";

const Contact = () => {
  return (
    <section
      className="contact-home-section"
      style={{ backgroundImage: `url(${trekBg})` }}
    >
      <div className="contact-home-overlay"></div>

      <div className="contact-home-container">
        <div className="contact-home-left">
          <div className="contact-home-text">
            <h2>Plan Your Stay at Teakwood</h2>
            <p>
              Ready for your nature escape? Share your details and our team will
              help you plan the perfect experience — whether it’s a cozy
              weekend, a fun day outing, or a corporate retreat.
            </p>
            <p className="contact-home-note">
              Fill out the form and we’ll get back to you soon.
            </p>
          </div>
        </div>

        <div className="contact-home-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdrWrzuKbHzpGBTaeV7awXGBlRDoLfZr3cs9X8uBBlZOBdblQ/viewform?embedded=true"
            frameBorder="0"
            title="Teakwood Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
