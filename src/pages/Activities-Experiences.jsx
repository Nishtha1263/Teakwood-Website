import React, { useState } from "react";
import "./Activities-Experiences.css";
import trek from "../assets/activity-trek.jpg";
import waterfall from "../assets/activity-trek.jpg";
import temple from "../assets/activity-trek.jpg";
import fort from "../assets/activity-trek.jpg";
import zoo from "../assets/activity-trek.jpg";

const activities = [
  {
    title: "BBQ Nights",
    desc: "Savor smoky grilled flavors under the stars — a perfect way to end the day with good food and great company.",
    img: trek,
  },
  {
    title: "Forest Trek",
    desc: "Venture into scenic forest trails and discover the wild beauty of Teakwood through guided treks.",
    img: trek,
  },
  {
    title: "Karaoke Evenings",
    desc: "Sing your heart out with friends and family — because every night is better with music and laughter.",
    img: trek,
  },
  {
    title: "Bonfire Nights",
    desc: "Gather around the crackling fire, share stories, and make memories that last beyond the flames.",
    img: trek,
  },
  {
    title: "Buffet Dining",
    desc: "Indulge in a hearty buffet spread featuring local delicacies and comforting favorites for every palate.",
    img: trek,
  },
  {
    title: "8 Ball Pool",
    desc: "Challenge your friends to a friendly match and show off your cue skills at our pool table.",
    img: trek,
  },
  {
    title: "Rifle Shooting",
    desc: "Test your aim and focus in this thrilling target shooting experience with complete safety supervision.",
    img: trek,
  },
  {
    title: "Star Gazing",
    desc: "When the night falls, lie back and lose yourself in the magic of the starlit sky — no city lights, just wonder.",
    img: trek,
  },
];

const experiences = [
  {
    title: "Baneshwar Waterfall",
    desc: "A serene natural cascade surrounded by dense forest, perfect for a peaceful nature walk or picnic.",
    img: waterfall,
  },
  {
    title: "Baneshwar Temple",
    desc: "An ancient temple rich in history and tranquility, nestled amidst lush greenery near Teakwood.",
    img: temple,
  },
  {
    title: "Historic Fort",
    desc: "Explore nearby forts that tell tales of Maharashtra’s glorious past and offer scenic hilltop views.",
    img: fort,
  },
  {
    title: "Zoo Visit",
    desc: "A fun day out for families with a visit to the nearby zoo — perfect for kids and nature lovers alike.",
    img: zoo,
  },
];

const ActivitiesExperiences = () => {
  const [view, setView] = useState("activities");

  const data = view === "activities" ? activities : experiences;

  return (
    <section className="experiences-section">
      <div className="exp-toggle">
        <button
          className={`toggle-btn ${view === "activities" ? "active" : ""}`}
          onClick={() => setView("activities")}
        >
          Activities
        </button>
        <button
          className={`toggle-btn ${view === "experiences" ? "active" : ""}`}
          onClick={() => setView("experiences")}
        >
          Experiences
        </button>
      </div>

      <h2 className="exp-title">
        {view === "activities" ? "Activities at Teakwood" : "Nearby Experiences"}
      </h2>

      <div className="exp-grid">
        {data.map((exp, index) => (
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

export default ActivitiesExperiences;
