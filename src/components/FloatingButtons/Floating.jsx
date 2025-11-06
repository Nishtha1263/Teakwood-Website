import React from "react";
import "./Floating.css";
import { FaWhatsapp, FaDownload, FaPhoneAlt, FaInstagram, FaFacebookF } from "react-icons/fa";

const FloatingButtons = () => {
  const whatsappNumber = "919881301029"; 
  const whatsappMessage = "Hi! I'm interested in booking a stay at Teakwood Forest Resort and Camp.";
  const brochureFile = "/Brochure.pdf"; 
  return (
    <div className="floating-buttons">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        className="floating-btn whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={40} /> 
      </a>
      <a
        href={`tel:+${whatsappNumber}`}
        className="floating-btn call"
        title="Call Us"
      >
        <FaPhoneAlt size={26} /> 
      </a>
      <a
        href="https://instagram.com/teakwoodforestresort/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn instagram"
        title="Instagram"
      >
        <FaInstagram size={35} /> 
      </a>
      <a
        href="https://facebook.com/teakwoodforestresort/" 
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn facebook"
        title="Facebook"
      >
        <FaFacebookF size={30} /> 
      </a>
    </div>
  );
};

export default FloatingButtons;