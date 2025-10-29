import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Hero.css";
import hero1 from "../../assets/hero1.jpeg";
import hero2 from "../../assets/hero2.jpeg";
import hero3 from "../../assets/hero3.jpeg";

const images = [
  {
    src: hero1,
    title: "Teakwood Forest Resort & Camp",
    subtitle: "Weekend getaway surrounded by nature and rustic charm",
    button: "Book Now",
    link: "/contact"
  },
  {
    src: hero2,
    title: "Adventure Awaits",
    subtitle: "Trek, zipline, and explore the outdoors like never before",
    button: "Explore Activities",
    link: "/activities"
  },
  {
    src: hero3,
    title: "Relax & Reconnect",
    subtitle: "Experience peace and comfort in nature’s lap",
    button: "View Packages",
    link: "/packages"
  }
];

const HomeCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
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
