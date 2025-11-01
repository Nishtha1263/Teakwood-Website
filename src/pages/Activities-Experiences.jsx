import React, { useState, useEffect } from "react";
import "./Activities-Experiences.css";
import balancebeam from "../assets/balancebeam.JPG";
import burma from "../assets/burma.jpg";
import karaoke from "../assets/karaoke.jpg";
import obstacle from "../assets/obstacle.jpg";
import outdoor from "../assets/outdoor.jpg";
import rifle from "../assets/rifle.jpg";
import zipline from "../assets/zipline.jpg";
import farm from "../assets/farm.png";
import bhatghardam from "../assets/bhatghardam.jpg";
import boardgames from "../assets/boardgames.jpg";
import carrom from "../assets/carrom.jpg";
import chess from "../assets/chess.jpg";
import ghat from "../assets/ghat.jpg";
import katraj from "../assets/katraj.jpg";
import necklacepoint from "../assets/necklacepoint.jpg";
import petroglyphs from "../assets/petroglyphs.jpg";
import pool from "../assets/pool.jpg";
import rajgad from "../assets/rajgad.jpg";
import sinhagad from "../assets/sinhagad.jpg";
import tabletennis from "../assets/tabletennis.jpg";
import torna from "../assets/torna.jpg";
import waterfall from "../assets/baneshwarwaterfall.jpg";
import balaji from "../assets/balaji.jpg";
import baneshwar from "../assets/baneshwar.png";
import bridge from "../assets/bridge.jpg";
import dance from "../assets/dance.jpg";
import bonfire from "../assets/bonfire.jpg";
import bbq from "../assets/bbq.jpg";
import trek from "../assets/trek.jpeg";

const activities = [
  { title: "Rifle Shooting", desc: "Test your aim with a fun and safe rifle shooting experience.", img: rifle },
  { title: "Burma Bridge", desc: "Challenge your balance and coordination on the thrilling Burma Bridge.", img: burma },
  { title: "Balance Beam", desc: "A fun balance challenge perfect for both kids and adults.", img: balancebeam },
  { title: "Zipline", desc: "Soar through the air on our exciting zipline adventure.", img: zipline },

  
  { title: "Outdoor Games", desc: "Enjoy open-air games like volleyball, cricket, and football.", img: outdoor },  
  { title: "Obstacle Course", desc: "Take on a mix of physical challenges designed for fun and teamwork.", img: obstacle },
  { title: "Karaoke", desc: "Sing your heart out with karaoke nights full of fun and laughter.", img: karaoke },
  { title: "Trek", desc: "Explore scenic trails and hills around Teakwood for a refreshing adventure.", img: trek },

  { title: "Dance and Music", desc: "Enjoy lively music and dance sessions under the stars.", img: dance },
  { title: "Bonfire", desc: "Gather around the warm bonfire for stories, laughter, and good company.", img: bonfire},
  { title: "Farm Walk", desc: "Stroll through the green farmland and experience rural tranquility.", img: farm },
  { title: "BBQ", desc: "End your day with delicious barbecue under the open sky.", img: bbq },
  
  { title: "Table Tennis", desc: "Challenge friends to a fast-paced indoor table tennis match.", img: tabletennis },
  { title: "8 Ball Pool", desc: "Relax and play a few friendly rounds of pool.", img: pool },
  { title: "Carrom", desc: "Enjoy this classic indoor board game with friends and family.", img: carrom },
  { title: "Chess", desc: "Exercise your mind with a quiet and strategic game of chess.", img: chess },

  { title: "Board Games", desc: "Spend time indoors playing your favorite board games.", img: boardgames },
];

const attractions = [
  { title: "Bhatghar Dam", desc: "A scenic dam surrounded by rolling hills — ideal for a peaceful drive and stunning sunset views.", img: bhatghardam },
  { title: "Baneshwar Waterfall", desc: "A serene natural cascade surrounded by dense forest, perfect for a peaceful nature walk or picnic.", img: waterfall },
  { title: "Sinhagad Fort", desc: "A historic hill fort near Pune offering panoramic views, trekking trails, and a glimpse into Maratha valor.", img: sinhagad },
  { title: "Rajgad Fort", desc: "One of the grand Maratha forts offering breathtaking views and a glimpse into Shivaji Maharaj’s history.", img: rajgad },
  { title: "Torna Fort", desc: "The first fort captured by Chhatrapati Shivaji Maharaj — a popular trekking destination with panoramic views.", img: torna },
  { title: "Necklace Point", desc: "A picturesque viewpoint where the river forms a necklace-like curve, perfect for photos and sunsets.", img: necklacepoint },
  { title: "Baneshwar Temple", desc: "An ancient temple rich in history and tranquility, nestled amidst lush greenery near Teakwood.", img: baneshwar },
  { title: "Balaji Temple", desc: "A replica of the Tirupati temple near Narayanpur, known for its architecture and peaceful surroundings.", img: balaji },
  { title: "Varandh Ghat", desc: "A scenic mountain pass with winding roads and breathtaking views, ideal for long drives and monsoon getaways.", img: ghat },
  { title: "Ambawane Hanging Bridge", desc: "A rustic hanging bridge surrounded by greenery — a hidden gem for short hikes and nature lovers.", img: bridge },
  { title: "Katraj Zoo", desc: "A fun day out for families with a variety of animals, reptiles, and birds to explore and learn about.", img: katraj },
  { title: "Petroglyphs", desc: "Ancient rock carvings that tell stories from prehistoric times — a fascinating stop for history enthusiasts.", img: petroglyphs },
];

const ActivitiesExperiences = () => {
  const [view, setView] = useState("activities");
  const [flash, setFlash] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash((prev) => !prev);
    }, 700); // flashing every 0.7s
    return () => clearInterval(interval);
  }, []);

  const data = view === "activities" ? activities : attractions;

  const flashStyle = flash
    ? {
        boxShadow: "0 0 15px 5px rgba(23, 150, 23, 0.7)", // green glow
        transform: "scale(1.05)",
        transition: "all 0.3s ease",
      }
    : {
        boxShadow: "none",
        transform: "scale(1)",
        transition: "all 0.3s ease",
      };

  return (
    <section className="attractions-section">
      <div className="exp-toggle">
        <button
          className={`toggle-btn ${view === "activities" ? "active" : ""}`}
          onClick={() => setView("activities")}
          style={view !== "activities" ? flashStyle : {}}
        >
          Activities
        </button>
        <button
          className={`toggle-btn ${view === "attractions" ? "active" : ""}`}
          onClick={() => setView("attractions")}
          style={view !== "attractions" ? flashStyle : {}}
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
