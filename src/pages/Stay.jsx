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
      duration: 650,
      easing: "ease-out",
      once: true,
      disableMutationObserver: true,
      offset: 40,
      disable: () => window.innerWidth < 768,
    });
  }, []);

  return (
    <section className="stay-wrapper">
      <SEO
        title="Stay at Teakwood Forest Resort - Private Cottages & Farm Stay Near Pune"
        description="Relax in nature at Teakwood Forest Resort - enjoy cozy private cottages, luxury tents, bonfire nights, and scenic views. Perfect weekend stay near Pune for families, couples, and corporate groups."
        keywords="Stay near Pune, Farm stay Pune, Private cottages near Pune, Luxury tents Pune, Family stay Pune, Nature resort Pune, Boutique stay Pune, Weekend getaway Pune, Romantic stay near Pune, Eco resort Pune"
        url="https://teakwoodcamping.com/stay"
      />

      <div className="stay-hero">
        <h1 data-aos="fade-up">Stay at Teakwood</h1>
        <p data-aos="fade-up" data-aos-delay="150">
          Unwind amidst lush greens and tranquil skies. Choose between our cozy
          cottages or adventurous forest tents - both designed to bring you
          closer to nature without compromising comfort.
        </p>
      </div>

      <div className="stay-section" data-aos="fade-up">
        <div className="stay-image">
          <img
            src={cottageMain}
            alt="Teakwood Cottage"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="stay-details">
          <h2>Cottages</h2>
          <p>
            Our elegant cottages blend charm with modern comfort. Enjoy serene
            views, cozy interiors, and private patios surrounded by mountains
            and greenery - perfect for a peaceful retreat.
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

      <div className="stay-section reverse" data-aos="fade-up">
        <div className="stay-image">
          <img
            src={tentMain}
            alt="Forest Tents"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </div>
        <div className="stay-details">
          <h2>Tents</h2>
          <p>
            Immerse yourself in the wild with our comfortable tents. Experience
            the thrill of camping with all essentials covered - safety, comfort,
            and that magical connection with nature.
          </p>
          <ul>
            <li>Total capacity: 30</li>
            <li>Clean shared washrooms</li>
            <li>Comfortable bedding and lighting</li>
            <li>Evening bonfires and games</li>
            <li>Optional meal packages</li>
            <li>Safe, secure campsite</li>
          </ul>
        </div>
      </div>

      <div className="stay-commons" data-aos="fade-up">
        <h2>Common Amenities</h2>
        <p>
          Designed to make your stay delightful - from dining to relaxation,
          every space brings warmth and community.
        </p>
        <div className="commons-grid">
          <div className="common-card" data-aos="fade-up">
            <img src={room} alt="Room" loading="lazy" decoding="async" />
            <h3>Spacious Rooms</h3>
          </div>
          <div className="common-card" data-aos="fade-up" data-aos-delay="80">
            <img
              src={bathroomImg}
              alt="Bathroom"
              loading="lazy"
              decoding="async"
            />
            <h3>Clean & Modern Bathrooms</h3>
          </div>
          <div className="common-card" data-aos="fade-up" data-aos-delay="120">
            <img src={patioImg} alt="Patio" loading="lazy" decoding="async" />
            <h3>Patio</h3>
          </div>
          <div className="common-card" data-aos="fade-up" data-aos-delay="160">
            <img src={diningImg} alt="Dining" loading="lazy" decoding="async" />
            <h3>Food & Dining Area</h3>
          </div>
          <div className="common-card" data-aos="fade-up" data-aos-delay="200">
            <img
              src={commonImg}
              alt="Common Area"
              loading="lazy"
              decoding="async"
            />
            <h3>Relaxing Common Spaces</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stay;
