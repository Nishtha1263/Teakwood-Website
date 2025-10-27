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
          Nestled amidst the lush greenery and serene landscapes, Teakwood Forest
          Resort & Camp offers a perfect escape from the city chaos. Whether
          you're seeking adventure, relaxation, or a blend of both — we promise
          an unforgettable experience in the lap of nature.
        </p>
        <Link to="/experiences"><button className="btn">Explore More</button></Link>
      </div>
    </section>
  );
};

export default Welcome;
