import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cottageMain from "/cottagepage.webp";
import tentMain from "/tent.webp";
import bathroomImg from "/bathroom.webp";
import diningImg from "/dining.webp";
import commonImg from "/common.webp";
import patioImg from "/patio.webp";
import room from "/cottagepage.webp";
import "./Stay.css";
import SEO from "./SEO";

const Stay = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    disableMutationObserver: true, 
  });
}, []);

  return (
    <section className="stay-wrapper">
      <SEO
        title="Stay at Teakwood Forest Resort – Private Cottages & Farm Stay Near Pune"
        description="Relax in nature at Teakwood Forest Resort – enjoy cozy private cottages, luxury tents, bonfire nights, and scenic views. Perfect weekend stay near Pune for families, couples, and corporate groups."
        keywords="Stay near Pune, Farm stay Pune, Private cottages near Pune, Luxury tents Pune, Family stay Pune, Nature resort Pune, Boutique stay Pune, Weekend getaway Pune, Romantic stay near Pune, Eco resort Pune"
        url="https://teakwoodcamping.com/stay"
      />

      <div className="stay-hero">
        <h1 data-aos="fade-up">Stay at Teakwood</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Unwind amidst lush greens and tranquil skies. Choose between our cozy
          cottages or adventurous forest tents — both designed to bring
          you closer to nature without compromising comfort.
        </p>
      </div>

      <div className="stay-section" data-aos="fade-right">
        <div className="stay-image">
          <img src={cottageMain} alt="Teakwood Cottage" />
        </div>
        <div className="stay-details">
          <h2>Cottages</h2>
          <p>
            Our elegant cottages blend charm with modern comfort. Enjoy
            serene views, cozy interiors, and private patios surrounded by
            mountains and greenery — perfect for a peaceful retreat.
          </p>
          <ul>
            <li>Total capacity: 40</li>
            <li>Private attached bathroom</li>
            <li>Patio with garden view</li>
            <li>Fan</li>
            <li>Complimentary breakfast</li>
            <li>Work Table</li>
            <li>Dressing Table</li>
          </ul>
        </div>
      </div>

      <div className="stay-section reverse" data-aos="fade-left">
        <div className="stay-image">
          <img src={tentMain} alt="Forest Tents" />
        </div>
        <div className="stay-details">
          <h2>Tents</h2>
          <p>
            Immerse yourself in the wild with our comfortable tents. Experience
            the thrill of camping with all essentials covered — safety, comfort,
            and that magical connection with nature.
          </p>
          <ul>
            <li>Total capacity: 30</li>
            <li>Clean shared washrooms</li>
            <li>Comfortable bedding & lighting</li>
            <li>Evening bonfires & games</li>
            <li>Optional meal packages</li>
            <li>Safe, secure campsite</li>
          </ul>
        </div>
      </div>

      <div className="stay-commons" data-aos="fade-up">
        <h2>Common Ammenities</h2>
        <p>
          Designed to make your stay delightful — from dining to relaxation,
          every space brings warmth and community.
        </p>
        <div className="commons-grid">
          <div className="common-card" data-aos="zoom-in">
            <img src={room} alt="Room" />
            <h3>Spacious Rooms</h3>
          </div>
          <div className="common-card" data-aos="zoom-in">
            <img src={bathroomImg} alt="Bathroom" />
            <h3>Clean & Modern Bathrooms</h3>
          </div>
          <div className="common-card" data-aos="zoom-in">
            <img src={patioImg} alt="Patio" />
            <h3>Patio</h3>
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