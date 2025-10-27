import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Packages.css";
import dayImg from "../../assets/activity-trek.jpg"; 
import nightImg from "../../assets/activity-trek.jpg"; 
import AOS from "aos";
import "aos/dist/aos.css";

const Packages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="packages-section">

      <h2 className="packages-title">Our Packages</h2>

      {/* Day Outing */}
      <div className="package-block" data-aos="fade-up">
        <div className="package-image">
          <img src={dayImg} alt="Day Outing" />
        </div>
        <div className="package-content">
          <h3>Day Outing</h3>
          <p>
            Spend a refreshing day amidst nature with farm-fresh meals, outdoor
            games, swimming, and scenic views. Perfect for families, friends,
            and corporate getaways.
          </p>
          <Link to="/packages"><button className="package-btn">Explore →</button></Link>
        </div>
      </div>

      {/* Overnight Stay */}
      <div className="package-block reverse" data-aos="fade-up">
        <div className="package-image">
          <img src={nightImg} alt="Overnight Stay" />
        </div>
        <div className="package-content">
          <h3>Overnight Stay</h3>
          <p>
            Unwind under starlit skies with bonfire nights, barbecue dinners,
            and peaceful cottage or tent accommodations — the perfect weekend
            escape near Pune.
          </p>
          <Link to="/packages"><button className="package-btn">Explore →</button></Link>
        </div>
      </div>
    </section>
  );
};

export default Packages;
