import React from "react";

const videos = [
  {
    title: "Quick Property Walkthrough",
    link: "https://www.instagram.com/p/DQ6qUK_iAZX/",
    thumbnail: "/teakwood-thumb.webp",
    description:
      "Get a quick visual overview of Teakwood Forest Resort and Camp, including key outdoor spaces, property vibe, and the overall stay experience.",
  },
  {
    title: "Detailed Property Walkthrough",
    link: "https://www.youtube.com/watch?v=jE5-T6VxHL4&t=41s",
    thumbnail: "https://i.ytimg.com/vi/jE5-T6VxHL4/hqdefault.jpg",
    description:
      "Explore Teakwood in detail through a complete walkthrough covering rooms, facilities, open areas, and the full property layout near Pune.",
  },
  {
    title: "Camping at Teakwood Forest Resort and Camp",
    link: "https://www.youtube.com/watch?v=EH8Qq4WDYJ4",
    thumbnail: "https://i.ytimg.com/vi/EH8Qq4WDYJ4/hqdefault.jpg",
    description:
      "See the camping experience at Teakwood, from tent setup and evening atmosphere to group moments and nature-based activities.",
  },
  {
    title: "The Story of Teakwood Forest Resort and Camp",
    link: "https://www.youtube.com/watch?v=pYkKtDU-RgE",
    thumbnail: "https://i.ytimg.com/vi/pYkKtDU-RgE/hqdefault.jpg",
    description:
      "Watch the story behind Teakwood, how the place evolved, and what makes it a unique resort and camp destination for families and groups.",
  },
  {
    title: "Biking",
    link: "https://www.youtube.com/watch?v=IvJmyzZOIuM",
    thumbnail: "https://i.ytimg.com/vi/IvJmyzZOIuM/hqdefault.jpg",
    description:
      "Discover the biking experience around Teakwood with scenic routes, off-road excitement, and a rider-focused outdoor adventure setting.",
  },
];

const ViewPropertySection = () => {
  return (
    <section className="video-highlights-section">
      <h2 className="video-highlights-title">Teakwood Video Highlights</h2>

      <div className="video-highlights-list">
        {videos.map((video) => (
          <article key={video.title} className="video-highlight-item">
            <a
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="video-thumb-wrap"
              aria-label={`Play ${video.title}`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="video-thumb"
                loading="lazy"
                decoding="async"
              />
              <span className="video-play-btn">Play</span>
            </a>

            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="video-cta"
              >
                Watch Video
              </a>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .video-highlights-section {
          width: 100%;
          background: #f7f7f7;
          padding: 70px 20px;
        }

        .video-highlights-title {
          font-family: 'Inter', sans-serif;
          font-size: 2.1rem;
          font-weight: 800;
          color: #4b6043;
          margin: 0 0 32px;
          text-align: center;
        }

        .video-highlights-list {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .video-highlight-item {
          background: #ffffff;
          border: 1px solid #e4eadb;
          border-radius: 10px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr;
        }

        .video-thumb-wrap {
          position: relative;
          display: block;
          line-height: 0;
          text-decoration: none;
        }

        .video-thumb {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          display: block;
          background: #dbe3d0;
        }

        .video-play-btn {
          position: absolute;
          right: 14px;
          bottom: 14px;
          background: rgba(0, 0, 0, 0.75);
          color: #fff;
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 0.85rem;
          font-weight: 700;
          line-height: 1;
        }

        .video-info {
          padding: 16px;
          text-align: left;
        }

        .video-info h3 {
          margin: 0 0 10px;
          color: #2f3f2a;
          font-family: 'Inter', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
        }

        .video-info p {
          margin: 0 0 14px;
          color: #5b5b5b;
          font-size: 0.97rem;
          line-height: 1.6;
        }

        .video-cta {
          display: inline-block;
          background: #4b6043;
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 9px 14px;
        }

        @media (min-width: 880px) {
          .video-highlight-item {
            grid-template-columns: minmax(360px, 45%) 1fr;
            align-items: stretch;
          }

          .video-info {
            padding: 20px 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default ViewPropertySection;
