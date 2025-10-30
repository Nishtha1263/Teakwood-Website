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
          Born from a dream in 2012, Teakwood Forest Resort & Camp was created to offer an authentic experience of living in harmony with nature. Nestled in a lush green forest near Pune, Teakwood grew organically over the years into a boutique nature retreat — preserving the flora and fauna while offering the comfort of minimal, eco-friendly living.
        </p>
        <p>
          From yoga retreats and kids’ camps to family getaways and corporate outings, Teakwood has become a favorite destination for those seeking peace, joy, and digital detox. Our home-style food, organic farming, and forest-inspired activities make every visit a refreshing experience.
        </p>
        <p>
          At Teakwood, life slows down — stories are shared around bonfires, laughter fills the air, and nature reminds us what abundance truly feels like.
        </p>
        <Link to="/activities"><button className="btn">Explore More</button></Link>
      </div>
    </section>
  );
};

export default Welcome;
