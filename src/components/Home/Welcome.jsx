import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Welcome.css";

const Welcome = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="welcome-section">
      <div className="welcome-content" data-aos="fade-up">
        <h2>Welcome to Teakwood Forest Resort & Camp</h2>
        <p>
         Escape the city and reconnect with nature at Teakwood Forest Resort & Camp, surrounded by lush greenery and peaceful forest views. Perfect for families, corporate outings, ladies’ getaways, and senior citizen retreats, Teakwood offers the ideal blend of adventure and relaxation. Enjoy outdoor activities, cozy stays, delicious meals, and unforgettable moments together — all in the heart of nature.
        </p>
        <Link to="/activities"><button className="btn">Explore More</button></Link>
      </div>
    </section>
  );
};

export default Welcome;
