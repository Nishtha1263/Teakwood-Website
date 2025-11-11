import React from "react";

const ViewPropertySection = () => {
  return (
    <div className="view-property-section">
      <h2 className="section-title">View Property in Detail</h2>

      <div className="video-grid">
        <a
          href="https://www.instagram.com/p/DPi-cTXiFZ-/"
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
        >
          <img
            src="/teakwood-thumb.jpeg"
            alt="Instagram Property Video"
            className="video-thumbnail"
          />
          <div className="overlay">
            <span className="play-icon">▶</span>
          </div>
        </a>

        <a
          href="https://www.instagram.com/p/DPi-cTXiFZ-/"
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
        >
          <img
            src="/teakwood-thumb.jpeg"
            alt="YouTube Property Video"
            className="video-thumbnail"
          />
          <div className="overlay">
            <span className="play-icon">▶</span>
          </div>
        </a>
      </div>

      <style>{`
        .view-property-section {
          width: 100%;
          background: #f7f7f7;
          padding: 60px 20px;
          text-align: center;
        }

        .section-title {
          font-family: 'Inter', sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #4b6043;
          margin-bottom: 40px;
        }

        .video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .video-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .video-card:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .video-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play-icon {
          color: white;
          font-size: 3.5rem;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: background 0.3s ease;
        }

        .video-card:hover .play-icon {
          background: rgba(255, 221, 0, 0.7);
        }

        @media (min-width: 768px) {
          .video-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default ViewPropertySection;
