import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import hero1 from "/hero.webp";
import hero2 from "/balancebeam.webp";
import hero3 from "/bonfirehero.webp";

const images = [
  {
    src: hero1,
    title: "Teakwood Forest Resort & Camp",
    subtitle: "Weekend getaway surrounded by nature and rustic charm",
    button: "Book Now",
    link: "/contact",
  },
  {
    src: hero2,
    title: "Adventure Awaits",
    subtitle: "Trek, zipline, and explore the outdoors like never before",
    button: "Explore Activities",
    link: "/activities",
  },
  {
    src: hero3,
    title: "Relax & Reconnect",
    subtitle: "Experience peace and comfort in nature’s lap",
    button: "View Packages",
    link: "/packages",
  },
];

const HomeCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; 

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img.src})` }}
        >
          <div className="carousel-overlay">
            <h1>{img.title}</h1>
            <p>{img.subtitle}</p>
            <Link to={img.link}>
              <button>{img.button}</button>
            </Link>
          </div>
        </div>
      ))}

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;