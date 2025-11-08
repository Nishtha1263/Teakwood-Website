import { Link } from "react-router-dom";
import "./Packages.css";
import dayImg from "/daypackage.webp";
import nightImg from "/nightpackage.webp";
import corporate from "/corporate.webp";
import SEO from "./SEO";

export default function Packages() {
  const packages = [
    {
      id: 1,
      title: "Day Outing",
      img: dayImg,
    },
    {
      id: 2,
      title: "Overnight Stay",
      img: nightImg,
    },
    {
      id: 3,
      title: "Corporate Outing",
      img: corporate,
    },
  ];

  return (
    <section className="packages-section">
      <SEO
        title="Resort Packages – Adventure, Stay & Family Getaway Near Pune"
        description="Explore Teakwood’s curated resort packages including adventure activities, family stays, weekend retreats, and corporate team outings – perfect for groups and couples near Pune."
        keywords="Resort packages near Pune, Weekend packages Pune, Family resort packages Pune, Corporate outing Pune, Adventure packages Pune, Camping deals Pune, Staycation packages Pune, Nature retreat Pune, Group trip Pune"
        url="https://teakwoodcamping.com/packages"
      />

      <h1 className="packages-title">Our Packages</h1>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img
              src={pkg.img}
              alt={pkg.title}
              className="package-img"
              draggable="false"
            />
            <div className="package-info">
              <Link to="/contact" className="custom-btn">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="custom-packages">
        <h2>Customizable Packages</h2>
        <p>
          We also offer tailor-made experiences for{" "}
          <strong>schools, corporates, and private groups</strong>. Contact us
          to design your own adventure!
        </p>
        <Link to="/contact" className="custom-btn">
          Customize Your Package
        </Link>
      </div>
    </section>
  );
}