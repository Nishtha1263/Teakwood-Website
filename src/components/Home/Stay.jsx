import React from "react";
import { Link } from "react-router-dom";
import "./Stay.css";
import tentImg from "../../assets/tent.png";
import cottageImg from "../../assets/cottage.png";

const Stay = () => {
  return (
    <section className="stay-section">
      <h2 className="stay-title">Stay With Us</h2>

      <div className="stay-container">
        {/* Tent Stay */}
        <div className="stay-option tent">
          <img src={tentImg} alt="Tent Stay" className="stay-image" />
          <div className="stay-overlay">
            <h3>Tent Stay</h3>
            <p>
              Wake up to birdsong in our cozy luxury tents — perfect for adventure
              seekers and couples.
            </p>
            <Link to="/stay" className="stay-btn">
              Explore →
            </Link>
          </div>
        </div>

        {/* Cottage Stay */}
        <div className="stay-option cottage">
          <img src={cottageImg} alt="Cottage Stay" className="stay-image" />
          <div className="stay-overlay">
            <h3>Cottage Stay</h3>
            <p>
              Enjoy a peaceful stay in our elegant cottages surrounded by hills
              and tranquility.
            </p>
            <Link to="/stay" className="stay-btn">
              Explore →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stay;
