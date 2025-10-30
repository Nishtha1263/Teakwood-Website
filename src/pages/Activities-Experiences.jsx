import React, { useState } from "react";
import "./Activities-Experiences.css";
import trek from "../assets/contact-bg.jpg";
import waterfall from "../assets/contact-bg.jpg";
import temple from "../assets/contact-bg.jpg";
import fort from "../assets/contact-bg.jpg";
import zoo from "../assets/contact-bg.jpg";

const activities = [
  { title: "Trek", desc: "Explore scenic trails and hills around Teakwood for a refreshing adventure.", img: trek },
  { title: "Dance and Music", desc: "Enjoy lively music and dance sessions under the stars.", img: trek },
  { title: "Bonfire", desc: "Gather around the warm bonfire for stories, laughter, and good company.", img: trek },
  { title: "Rifle Shooting", desc: "Test your aim with a fun and safe rifle shooting experience.", img: trek },
  { title: "Burma Bridge", desc: "Challenge your balance and coordination on the thrilling Burma Bridge.", img: trek },
  { title: "Balance Beam", desc: "A fun balance challenge perfect for both kids and adults.", img: trek },
  { title: "Zipline", desc: "Soar through the air on our exciting zipline adventure.", img: trek },
  { title: "Obstacle Course", desc: "Take on a mix of physical challenges designed for fun and teamwork.", img: trek },
  { title: "Farm Walk", desc: "Stroll through the green farmland and experience rural tranquility.", img: trek },
  { title: "Outdoor Games", desc: "Enjoy open-air games like volleyball, cricket, and football.", img: trek },
  { title: "Table Tennis", desc: "Challenge friends to a fast-paced indoor table tennis match.", img: trek },
  { title: "8 Ball Pool", desc: "Relax and play a few friendly rounds of pool.", img: trek },
  { title: "Karaoke", desc: "Sing your heart out with karaoke nights full of fun and laughter.", img: trek },
  { title: "Carrom", desc: "Enjoy this classic indoor board game with friends and family.", img: trek },
  { title: "Chess", desc: "Exercise your mind with a quiet and strategic game of chess.", img: trek },
  { title: "Library", desc: "Unwind with a good book in our cozy reading space.", img: trek },
  { title: "Board Games", desc: "Spend time indoors playing your favorite board games.", img: trek },
  { title: "BBQ", desc: "End your day with delicious barbecue under the open sky.", img: trek },
];

const attractions = [
  {
    title: "Bhatghar Dam",
    desc: "A scenic dam surrounded by rolling hills — ideal for a peaceful drive and stunning sunset views.",
    img: trek,
  },
  {
    title: "Baneshwar Waterfall",
    desc: "A serene natural cascade surrounded by dense forest, perfect for a peaceful nature walk or picnic.",
    img: trek,
  },
  {
    title: "Sinhagad Fort",
    desc: "A historic hill fort near Pune offering panoramic views, trekking trails, and a glimpse into Maratha valor.",
    img: trek,
  },
  {
    title: "Rajgad Fort",
    desc: "One of the grand Maratha forts offering breathtaking views and a glimpse into Shivaji Maharaj’s history.",
    img: trek,
  },
  {
    title: "Torna Fort",
    desc: "The first fort captured by Chhatrapati Shivaji Maharaj — a popular trekking destination with panoramic views.",
    img: trek,
  },
  {
    title: "Necklace Point",
    desc: "A picturesque viewpoint where the river forms a necklace-like curve, perfect for photos and sunsets.",
    img: trek,
  },
  {
    title: "Baneshwar Temple",
    desc: "An ancient temple rich in history and tranquility, nestled amidst lush greenery near Teakwood.",
    img: trek,
  },
  {
    title: "Balaji Temple",
    desc: "A replica of the Tirupati temple near Narayanpur, known for its architecture and peaceful surroundings.",
    img: trek,
  },
  {
    title: "Varandh Ghat",
    desc: "A scenic mountain pass with winding roads and breathtaking views, ideal for long drives and monsoon getaways.",
    img: trek,
  },
  {
    title: "Ambawane Hanging Bridge",
    desc: "A rustic hanging bridge surrounded by greenery — a hidden gem for short hikes and nature lovers.",
    img: trek,
  },
  {
    title: "Katraj Zoo",
    desc: "A fun day out for families with a variety of animals, reptiles, and birds to explore and learn about.",
    img: trek,
  },
  {
    title: "Petroglyphs",
    desc: "Ancient rock carvings that tell stories from prehistoric times — a fascinating stop for history enthusiasts.",
    img: trek,
  },
];

const ActivitiesExperiences = () => {
  const [view, setView] = useState("activities");

  const data = view === "activities" ? activities : attractions;

  return (
    <section className="attractions-section">
      <div className="exp-toggle">
        <button
          className={`toggle-btn ${view === "activities" ? "active" : ""}`}
          onClick={() => setView("activities")}
        >
          Activities
        </button>
        <button
          className={`toggle-btn ${view === "attractions" ? "active" : ""}`}
          onClick={() => setView("attractions")}
        >
          Nearby Attractions
        </button>
      </div>

      <h2 className="exp-title">
        {view === "activities" ? "Activities at Teakwood" : "Nearby Attractions"}
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
