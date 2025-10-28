import React from "react";
import "./Activities-Experiences.css";
import trek from "../assets/activity-trek.jpg";

const experiences = [
  {
    title: "Forest Trekking",
    desc: "Explore the lush green trails surrounding Teakwood and reconnect with nature through guided treks.",
    img: trek,
  },
  {
    title: "Campfire Nights",
    desc: "Unwind under the stars with music, laughter, and stories around a warm campfire.",
    img: trek,
  },
  {
    title: "Bird Watching",
    desc: "Discover rare bird species in their natural habitat with our morning birding sessions.",
    img: trek,
  },
  {
    title: "Kayaking",
    desc: "Paddle your way through serene waters and enjoy the calm of nature from a new perspective.",
    img: trek,
  },
   {
    title: "Campfire Nights",
    desc: "Unwind under the stars with music, laughter, and stories around a warm campfire.",
    img: trek,
  },
  {
    title: "Bird Watching",
    desc: "Discover rare bird species in their natural habitat with our morning birding sessions.",
    img: trek,
  },
  {
    title: "Kayaking",
    desc: "Paddle your way through serene waters and enjoy the calm of nature from a new perspective.",
    img: trek,
  },
];

const Experiences = () => {
  return (
    <section className="experiences-section">
      <h2 className="exp-title">Activities & Experiences</h2>
      <div className="exp-grid">
        {experiences.map((exp, index) => (
          <div className="exp-card" key={index}>
            <img src={exp.img} alt={exp.title} className="exp-img" />
            <div className="exp-overlay">
              <h3>{exp.title}</h3>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
