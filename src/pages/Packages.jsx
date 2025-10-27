import { useState } from "react";
import {Link} from "react-router-dom";
import "./Packages.css";
import dayImg from "../assets/hero1.jpeg";
import nightImg from "../assets/hero2.jpeg";

export default function Packages() {
  const packages = [
    {
      id: 1,
      title: "Nature Awaits!",
      subtitle: "Day Outing Package (8:00 AM – 5:00 PM)",
      img: dayImg,
      price: "Adults ₹1200 | Children (5–10 yrs) ₹800",
      details:
        "Forest Trek, Burma Bridge, Zipline, Indoor & Outdoor Games, Karaoke, Waterfall",
      meals: "Breakfast Buffet, Lunch, High Tea",
      direction: "left",
    },
    {
      id: 2,
      title: "Starry Escape",
      subtitle: "Overnight Package (11:00 AM – 10:00 AM)",
      img: nightImg,
      price: "Adults ₹1900 | Children (5–10 yrs) ₹1300",
      details:
        "Forest Trek, Burma Bridge, Zipline, Indoor & Outdoor Games, Karaoke, Bonfire/Campfire. Chargeable: Petroglyph Trek, Pool Table (18+), Air Gun Shooting",
      meals: "High Tea, Lunch, Dinner, Breakfast Buffet",
      direction: "right",
    },
  ];

  return (
    <section className="packages-section">
      <h1 className="packages-title">Our Packages</h1>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`package-card ${pkg.direction === "right" ? "slide-right" : "slide-left"}`}
          >
            <img src={pkg.img} alt={pkg.title} className="package-img" />
            <div className="package-overlay">
              <h2>{pkg.title}</h2>
              <p className="subtitle">{pkg.subtitle}</p>
              <p className="price">{pkg.price}</p>
              <p><strong>Included Activities:</strong> {pkg.details}</p>
              <p><strong>Meals:</strong> {pkg.meals}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="custom-packages">
        <h2>Customizable Packages</h2>
        <p>
          We also offer tailor-made experiences for <strong>schools, corporates, and private groups</strong>. 
          Contact us to design your own adventure!
        </p>
        <Link to="/contact" className="custom-btn">
          Customize Your Package
        </Link>
      </div>
    </section>
  );
}
