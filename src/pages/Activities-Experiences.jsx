import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Activities-Experiences.css";
import SEO from "./SEO.jsx";

import balancebeam from "/balancebeam.webp";
import burma from "/burma.webp";
import karaoke from "/karaoke.webp";
import obstacle from "/obstacle.webp";
import outdoor from "/outdoor.webp";
import rifle from "/rifle.webp";
import zipline from "/zipline.webp";
import farm from "/farm.webp";
import bhatghardam from "/bhatghardam.webp";
import boardgames from "/boardgames.webp";
import carrom from "/carrom.webp";
import chess from "/chess.webp";
import ghat from "/ghat.webp";
import katraj from "/katraj.webp";
import necklacepoint from "/necklacepoint.webp";
import petroglyphs from "/petroglyphs.webp";
import pool from "/pool.webp";
import rajgad from "/rajgad.webp";
import sinhagad from "/sinhagad.webp";
import tabletennis from "/tabletennis.webp";
import torna from "/torna.webp";
import waterfall from "/baneshwarwaterfall.webp";
import balaji from "/balaji.webp";
import baneshwar from "/baneshwar.webp";
import bridge from "/bridge.webp";
import dance from "/dance.webp";
import bonfire from "/bonfire.webp";
import bbq from "/bbq.webp";
import trek from "/trek.webp";

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
  { title: "Bonfire", desc: "Gather around the warm bonfire for stories, laughter, and good company.", img: bonfire },
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

const LazyImage = ({ src, alt, className }) => {
  const [visible, setVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={visible ? src : ""}
      data-src={src}
      alt={alt}
      className={`${className} ${visible ? "loaded" : "loading"}`}
      loading="lazy"
    />
  );
};

const ActivitiesExperiences = () => {
  const [view, setView] = useState("activities");
  const [flash, setFlash] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setFlash(prev => !prev), 700);
    return () => clearInterval(interval);
  }, []);

  const flashStyle = flash
    ? { boxShadow: "0 0 15px 5px rgba(23,150,23,0.7)", scale: 1.05 }
    : { boxShadow: "none", scale: 1 };

  const data = view === "activities" ? activities : attractions;

  return (
    <section className="attractions-section">
      <SEO
        title="Activities & Nearby Experiences – Adventure, Nature & Sightseeing Near Pune | Teakwood Forest Resort"
        description="From ziplining, trekking, bonfires, karaoke, and farm walks to nearby attractions like Bhatghar Dam, Baneshwar Temple, and Sinhagad Fort — Teakwood Forest Resort near Pune offers the perfect blend of adventure, relaxation, and nature experiences."
        keywords="Activities near Pune, Adventure resort Pune, Zipline near Pune, Trekking near Pune, Bonfire resort Pune, Karaoke night Pune, Nature resort Pune, Farm stay Pune, Things to do near Pune, Bhatghar Dam, Baneshwar Temple, Sinhagad Fort, Rajgad Fort, Torna Fort, Weekend getaway Pune, Family resort Pune, Nature experiences Pune, Farm walks Pune, Outdoor games Pune, Picnic spots near Pune"
        url="https://teakwoodcamping.com/activities"
      />

      <h2 className="exp-title">Activities & Nearby Attractions</h2>

      <div className="exp-toggle">
        <motion.button
          className={`toggle-btn ${view === "activities" ? "active" : ""}`}
          onClick={() => setView("activities")}
          animate={view !== "activities" ? flashStyle : {}}
          transition={{ duration: 0.5 }}
        >
          Activities
        </motion.button>
        <motion.button
          className={`toggle-btn ${view === "attractions" ? "active" : ""}`}
          onClick={() => setView("attractions")}
          animate={view !== "attractions" ? flashStyle : {}}
          transition={{ duration: 0.5 }}
        >
          Nearby Attractions
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          className="exp-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {data.map((exp, i) => (
            <div className="exp-card" key={i}>
              <LazyImage src={exp.img} alt={exp.title} className="exp-img" />
              <div className="exp-overlay">
                <h3>{exp.title}</h3>
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ActivitiesExperiences;
