import {Link } from "react-router-dom";
import "./Packages.css";
import dayImg from "/cottage.webp";
import nightImg from "/night.webp";
import corporate from "/corporate.webp";
import ladiesImg from "/ladies.webp";
import SEO from "./SEO";
import Reviews from "../components/Home/Reviews";

export default function Packages() {
  const packages = [
    {
      id: 1,
      title: "Day Outing",
      slug: "day-outing",
      img: dayImg,
      tag: "Quick Escape",
      highlights: ["Meals Included", "Outdoor games", "Indoor Games"],
    },
    {
      id: 2,
      title: "Overnight Stay",
      slug: "overnight-stay",
      img: nightImg,
      tag: "Most Popular",
      highlights: ["Stay", "Campfire", "Nature Experience"],
    },
    {
      id: 3,
      title: "Ladies Special",
      slug: "ladies-outing",
      img: ladiesImg,
      tag: "Safe & Fun",
      highlights: ["Secure Space", "Group Friendly", "Special Pricing"],
    },
    {
      id: 4,
      title: "Corporate Retreat",
      slug: "corporate-retreat",
      img: corporate,
      tag: "Best for Teams",
      highlights: ["Team Activities", "Large Groups", "Custom Plans"],
    },
  ];

  return (
    <section className="packages">
      <SEO
        title="Resort Packages – Adventure, Stay & Getaways Near Pune"
        description="Explore Teakwood’s curated packages including day outings, overnight stays, ladies specials, and corporate retreats."
        url="https://teakwoodcamping.com/packages"
      />

      {/* HERO */}
      <div className="packages-hero">
        <h1>Choose Your Perfect Getaway</h1>
        <p>
          From quick day escapes to full nature stays — find the experience that
          fits your vibe.
        </p>
      </div>

      {/* PACKAGES */}
      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <div className="img-wrapper">
              <img src={pkg.img} alt={pkg.title} />
              <span className="tag">{pkg.tag}</span>
            </div>

            <div className="package-content">
              <h2>{pkg.title}</h2>

              <ul>
                {pkg.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="btn-row">
                <Link to={`/${pkg.slug}`} className="btn-outline">
                  View Details
                </Link>

                <Link
                  to={`https://wa.me/919881301029?text=${encodeURIComponent(
                    `Hi! I want to enquire about the ${pkg.title} package.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book Now
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* WHY TEAKWOOD */}
      <div className="why-section">
        <h2>Why Teakwood?</h2>

        <div className="why-grid">
          <div>
            <h3>🌿 Nature First</h3>
            <p>Stay surrounded by greenery, fresh air, and peaceful vibes.</p>
          </div>

          <div>
            <h3>🔥 Activities & Fun</h3>
            <p>Rain dance, campfire, games, and experiences for all age groups.</p>
          </div>

          <div>
            <h3>👨‍👩‍👧‍👦 Perfect for Groups</h3>
            <p>Families, friends, corporates — designed for shared experiences.</p>
          </div>

          <div>
            <h3>📍 Easy Access</h3>
            <p>Quick getaway near Pune without long travel stress.</p>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <Reviews />

      {/* CUSTOM PACKAGES */}
      <div className="custom-packages">
        <h2>Need Something Custom?</h2>
        <p>
          We design experiences for schools, corporates, and private groups.
          Tell us what you need — we’ll make it happen.
        </p>

        <Link to="/contact" className="btn-primary">
          Customize Your Package
        </Link>
      </div>
    </section>
  );
}