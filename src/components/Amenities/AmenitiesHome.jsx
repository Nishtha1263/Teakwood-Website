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
  GiWinchesterRifle,
  GiMicrophone,
  GiSoccerBall,
  GiBarbecue
} from "react-icons/gi";
import { FaTableTennis } from "react-icons/fa";

const amenities = [
  { icon: <GiWaterfall />, title: "Waterfall", desc: "Natural waterfall nearby for a refreshing dip." },
  { icon: <GiMountainCave />, title: "Trek", desc: "Explore scenic forest trails with guided treks." },  
  { icon: <GiSuspensionBridge />, title: "Burma Bridge", desc: "Test your balance on the adventurous Burma bridge." },
  { icon: <GiRopeBridge />, title: "Zipline", desc: "Fly through the trees on our thrilling zipline ride!" },  
  { icon: <GiWinchesterRifle />, title: "Rifle Shooting", desc: "Try your aim at our air rifle shooting range." },
  { icon: <GiSoccerBall />, title: "Outdoor Games", desc: "Fun sports and group games in open grounds." },
  { icon: <FaTableTennis />, title: "Indoor Games", desc: "Board games and entertainment for everyone." },
  { icon: <GiMicrophone />, title: "Karaoke", desc: "Sing your heart out with friends and family." },
  { icon: <GiCampfire />, title: "Bonfire", desc: "Relax by the bonfire under the starry night sky." },
  { icon: <GiBarbecue />, title: "Barbecue", desc: "Enjoy delicious barbecues under the open sky." },
];

const Amenities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="amenities-section">
      <h2>Activities</h2>
      <p className="amenities-subtitle" data-aos="fade-up">
        Farm stay and boutique resort near Pune
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
