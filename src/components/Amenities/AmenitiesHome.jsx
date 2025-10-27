import React, { useEffect } from "react";
import "./AmenitiesHome.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiWaterfall,
  GiMountainCave,
  GiCampfire,
  GiSuspensionBridge,
  GiRopeBridge,
  GiPistolGun,
  GiMicrophone,
  GiSoccerBall,
  GiPuzzle,
} from "react-icons/gi";

const amenities = [
  { icon: <GiWaterfall />, title: "Waterfall", desc: "Natural waterfall nearby for a refreshing dip." },
  { icon: <GiMountainCave />, title: "Trek", desc: "Explore scenic forest trails with guided treks." },
  { icon: <GiCampfire />, title: "Barbecue", desc: "Enjoy delicious barbecues under the open sky." },
  { icon: <GiSuspensionBridge />, title: "Burma Bridge", desc: "Test your balance on the adventurous Burma bridge." },
  { icon: <GiRopeBridge />, title: "Zipline", desc: "Fly through the trees on our thrilling zipline ride!" },
  { icon: <GiPistolGun />, title: "Rifle Shooting", desc: "Try your aim at our air rifle shooting range." },
  { icon: <GiMicrophone />, title: "Karaoke", desc: "Sing your heart out with friends and family." },
  { icon: <GiSoccerBall />, title: "Outdoor Games", desc: "Fun sports and group games in open grounds." },
  { icon: <GiPuzzle />, title: "Indoor Games", desc: "Board games and entertainment for everyone." },
  { icon: <GiCampfire />, title: "Bonfire", desc: "Relax by the bonfire under the starry night sky." },
];

const Amenities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="amenities-section">
      <p className="amenities-subtitle" data-aos="fade-up">
        Family-friendly farm stay and boutique resort near Pune
      </p>
      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div
            className="amenity-card"
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <div className="amenity-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p className="amenity-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
