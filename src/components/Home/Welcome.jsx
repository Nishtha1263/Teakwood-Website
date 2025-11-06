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
        <p>Where nature slows time — and life feels whole again.</p>
        <p>Born from a dream in 2012, Teakwood Forest Resort & Camp was created to offer an authentic experience of living in harmony with nature. Nestled in a lush green forest near Pune, Teakwood has grown organically into a boutique nature retreat — preserving the rich flora and fauna while offering the comfort of simple, eco-friendly living.</p>
        <p>Whether you’re here for a yoga retreat, a kids’ adventure camp, a family getaway, or a corporate offsite, Teakwood invites you to unwind, reconnect, and rediscover the joy of being present.</p>
        <p>Enjoy home-style food, organic farm experiences, and forest-inspired activities that refresh your body and soul. As the day fades, gather around a bonfire, share stories under a starlit sky, and let nature remind you of what abundance truly feels like.</p>
        <p><strong>At Teakwood, life moves gently — just as it should.</strong></p>
        <Link to="/activities"><button className="btn">Explore More</button></Link>
      </div>
    </section>
  );
};

export default Welcome;