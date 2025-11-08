import React from "react";
import { Link } from "react-router-dom";
import "./StayHome.css";
import tentImg from "/tent.webp";
import cottageImg from "/cottage.webp";

const Stay = () => {
  return (
    <section className="stay-home-section">
      <h2 className="stay-home-title">Stay With Us</h2>

      <div className="stay-home-container">
        <div className="stay-home-option tent">
          <img src={tentImg} alt="Tent Stay" className="stay-home-image" />
          <div className="stay-home-overlay">
            <h3>Tent Stay</h3>
            <p>
              Wake up to birdsong in our cozy luxury tents — perfect for adventure
              seekers, families, and corporate outings.
            </p>
            <Link to="/stay" className="stay-home-btn">
              Explore
            </Link>
          </div>
        </div>

        <div className="stay-home-option cottage">
          <img src={cottageImg} alt="Cottage Stay" className="stay-home-image" />
          <div className="stay-home-overlay">
            <h3>Cottage Stay</h3>
            <p>
              Enjoy a peaceful stay in our elegant cottages surrounded by hills
              and tranquility.
            </p>
            <Link to="/stay" className="stay-home-btn">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stay;