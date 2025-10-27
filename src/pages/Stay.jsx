import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cottageMain from "../assets/hero1.jpeg";
import tentMain from "../assets/hero1.jpeg";
import bathroomImg from "../assets/hero1.jpeg";
import diningImg from "../assets/hero1.jpeg";
import commonImg from "../assets/hero1.jpeg";
import "./Stay.css";

const Stay = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="stay-wrapper">
      {/* --- HERO --- */}
      <div className="stay-hero">
        <h1 data-aos="fade-up">Stay at Teakwood</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Unwind amidst lush greens and tranquil skies. Choose between our cozy
          wooden cottages or adventurous forest tents — both designed to bring
          you closer to nature without compromising comfort.
        </p>
      </div>

      {/* --- COTTAGE SECTION --- */}
      <div className="stay-section" data-aos="fade-right">
        <div className="stay-image">
          <img src={cottageMain} alt="Teakwood Cottage" />
        </div>
        <div className="stay-details">
          <h2>Wooden Cottages</h2>
          <p>
            Our elegant cottages blend rustic charm with modern comfort. Enjoy
            serene views, cozy interiors, and private balconies surrounded by
            teak forests — perfect for a peaceful retreat.
          </p>
          <ul>
            <li>Private attached bathroom</li>
            <li>Balcony with forest view</li>
            <li>Air conditioning / fan</li>
            <li>Complimentary breakfast</li>
            <li>24/7 room service on request</li>
          </ul>
        </div>
      </div>

      {/* --- TENT SECTION --- */}
      <div className="stay-section reverse" data-aos="fade-left">
        <div className="stay-image">
          <img src={tentMain} alt="Forest Tents" />
        </div>
        <div className="stay-details">
          <h2>Forest Tents</h2>
          <p>
            Immerse yourself in the wild with our comfortable tents. Experience
            the thrill of camping with all essentials covered — safety, comfort,
            and that magical connection with nature.
          </p>
          <ul>
            <li>Clean shared washrooms</li>
            <li>Comfortable bedding & lighting</li>
            <li>Evening bonfires & games</li>
            <li>Optional meal packages</li>
            <li>Safe, secure campsite</li>
          </ul>
        </div>
      </div>

      {/* --- commons --- */}
      <div className="stay-commons" data-aos="fade-up">
        <h2>Common Ammenities</h2>
        <p>
          Designed to make your stay delightful — from dining to relaxation,
          every space brings warmth and community.
        </p>
        <div className="commons-grid">
          <div className="common-card" data-aos="zoom-in">
            <img src={bathroomImg} alt="Bathroom" />
            <h3>Clean & Modern Bathrooms</h3>
          </div>
          <div className="common-card" data-aos="zoom-in" data-aos-delay="150">
            <img src={diningImg} alt="Dining" />
            <h3>Food & Dining Area</h3>
          </div>
          <div className="common-card" data-aos="zoom-in" data-aos-delay="300">
            <img src={commonImg} alt="Common Area" />
            <h3>Relaxing Common Spaces</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stay;
