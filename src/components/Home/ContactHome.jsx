import React from "react";
import "./ContactHome.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-overlay"></div>

      <div className="contact-container">
        <div className="contact-text">
          <h2>Plan Your Stay at Teakwood</h2>
          <p>
            Ready for your nature escape?  
            Share your details and our team will help you plan the perfect
            experience — whether it’s a cozy weekend, a fun day outing, or a corporate retreat.
          </p>
          <p className="contact-note">
            Fill out the form and we’ll get back to you soon.
          </p>
        </div>

        <div className="contact-form">
          {/* 🔁 Replace the URL below with your actual Google Form embed link */}
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdrWrzuKbHzpGBTaeV7awXGBlRDoLfZr3cs9X8uBBlZOBdblQ/viewform?embedded=true" width="640" height="1841" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
