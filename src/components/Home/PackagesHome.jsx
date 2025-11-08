import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./PackagesHome.css";
import dayImg from "/hero1.webp"; 
import nightImg from "/night.webp"; 
import AOS from "aos";
import "aos/dist/aos.css";

const Packages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="packages-home-section">

      <h2 className="packages-home-title">Our Packages</h2>

      <div className="packages-home-block" data-aos="fade-up">
        <div className="packages-home-image">
          <img src={dayImg} alt="Day Outing" />
        </div>
        <div className="packages-home-content">
          <h3>Day Outing</h3>
          <p>
            Spend a refreshing day amidst nature with homely meals, outdoor
            games, and scenic views. Perfect for families, friends, senior citizens,
            and corporate getaways.
          </p>
          <Link to="/packages"><button className="packages-home-btn">Explore →</button></Link>
        </div>
      </div>

      <div className="packages-home-block reverse" data-aos="fade-up">
        <div className="packages-home-image">
          <img src={nightImg} alt="Overnight Stay" />
        </div>
        <div className="packages-home-content">
          <h3>Overnight Stay</h3>
          <p>
            Unwind under starlit skies with bonfire nights, barbecue dinners,
            and peaceful cottage or tent accommodations — the perfect weekend
            escape near Pune.
          </p>
          <Link to="/packages"><button className="packages-home-btn">Explore →</button></Link>
        </div>
      </div>
    </section>
  );
};

export default Packages;