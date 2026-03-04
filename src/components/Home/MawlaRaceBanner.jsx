import React from "react";
import { Calendar, MapPin, Mountain, Ruler, Flag, Trees } from "lucide-react";

export default function FeaturedRaceSection() {
  return (
    <section className="featured-section">
      {/* BACKGROUND IMAGE */}
      <img src="/mawlabg.png" alt="Forest Background" className="bg-image" />
      <div className="overlay" />

      {/* CONTENT */}
      <div className="featured-container">
        {/* LEFT TEXT */}
        <div className="left">
          <div className="partner-badge">
            <Trees size={16} />
            <span>Official Basecamp Partner</span>
          </div>

          <h2 className="heading">Teakwood Forest Resort</h2>
          <p className="subheading">Proud Basecamp Partner for</p>
          <h3 className="race-title">The Great Mawla Ghaati Ultra 2026</h3>

          <p className="description">
            Stay at the official race basecamp in the heart of the Sahyadris. Wake up steps
            away from the start line, recover surrounded by forest silence, and experience
            the ultra the way it was meant to be.
          </p>

          <div className="cta-wrapper">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScUySdc26xVmJ6GalIOQFv03B1j5nLoRyyV0L4TFRugk6mY0Q/viewform?usp=publish-editor"
              className="primary-btn"
            >
              Book Your Stay for the Race
            </a>
            <a href="/mawla-ghaati-run" className="secondary-btn">
              Know More
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="card">
          <div className="card-header">
            <span className="event-label">FEATURED EVENT</span>
          </div>

          <h3 className="card-title">Mawla Ghaati Ultra 2026</h3>

          <div className="details">
            <DetailRow icon={<Calendar size={18} />} text="5 - 7 June 2026" />
            <DetailRow icon={<MapPin size={18} />} text="Teakwood Forest Resort & Camp" />
            <DetailRow icon={<Flag size={18} />} text="Self-Supported Mountain Ultra" />
            <DetailRow icon={<Ruler size={18} />} text="10K • 25K • 50K • 75K • 100K • 100M • 200M" />
            <DetailRow icon={<Mountain size={18} />} text="Technical Sahyadri Trails" />
          </div>
        </div>
      </div>

      {/* ===== INLINE CSS ===== */}
      <style>{`
        .featured-section {
          position: relative;
          overflow: hidden;
          min-height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
          color: #fff;
        }

        .bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(0, 20, 10, 0.6), rgba(0, 40, 20, 0.7));
          z-index: 1;
        }

        .featured-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 50px;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          max-width: 1200px;
          padding: 20px;
        }

        .left {
          flex: 1;
          min-width: 280px;
          max-width: 600px;
          text-align: left;
          padding: 20px;
        }

        .partner-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(50, 80, 40, 0.6);
          color: #fff;
          padding: 10px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .heading {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #fff;
        }

        .subheading {
          font-size: 1rem;
          color: #fff;
          margin-bottom: 8px;
        }

        .race-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 22px;
        }

        .description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #fff;
          margin-bottom: 35px;
        }

        .cta-wrapper {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .primary-btn {
          padding: 14px 32px;
          border-radius: 30px;
          border: none;
          background: #ff7a00;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          text-align: center;
        }

        .secondary-btn {
          padding: 14px 32px;
          border-radius: 30px;
          border: 2px solid #ff7a00;
          background: transparent;
          color: #ff7a00;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          text-align: center;
        }

        .card {
          flex: 0 0 350px;
          min-width: 280px;
          max-width: 400px;
          background: rgba(20, 40, 20, 0.85);
          padding: 30px;
          border-radius: 28px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          text-align: left;
          color: #fff;
        }

        .card-header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 15px;
        }

        .event-label {
          font-size: 12px;
          color: #fff;
          letter-spacing: 1px;
        }

        .card-title {
          font-size: 1.5rem;
          margin-bottom: 22px;
          color: #fff;
        }

        .details {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 28px;
        }

        .detail-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1rem;
          color: #fff;
        }

        .icon-wrap {
          background: rgba(50, 80, 40, 0.3);
          padding: 8px;
          border-radius: 12px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .featured-container {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }

          .left {
            max-width: 90%;
            padding: 15px;
          }

          .card {
            max-width: 90%;
            padding: 25px;
          }

          .heading {
            font-size: 1.5rem;
          }

          .race-title {
            font-size: 1.2rem;
          }

          .description {
            font-size: 0.9rem;
          }

          .detail-row {
            font-size: 0.8rem;
          }

          .primary-btn,
          .secondary-btn {
            padding: 12px 28px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}

function DetailRow({ icon, text }) {
  return (
    <div className="detail-row">
      <div className="icon-wrap">{icon}</div>
      <span>{text}</span>
    </div>
  );
}