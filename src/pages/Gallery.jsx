import React, { useEffect, useState } from "react";
import SEO from "./SEO";

const galleryImages = [
  "/hero.webp",
  "/hero1.webp",
  "/hero3.webp",
  "/corporate.webp",
  "/birthday.webp",
  "/day.webp",
  "/night.webp",
  "/pool.webp",
  "/cottage.webp",
  "/room.webp",
  "/dining.webp",
  "/tent.webp",
  "/bbq.webp",
  "/bonfire.webp",
  "/offroading.webp",
  "/biking.webp",
  "/zipline.webp",
  "/rifle.webp",
  "/obstacle.webp",
  "/balancebeam.webp",
  "/bridge.webp",
  "/burma.webp",
  "/karaoke.webp",
  "/dance.webp",
  "/boardgames.webp",
  "/tabletennis.webp",
  "/carrom.webp",
  "/chess.webp",
  "/farm.webp",
  "/trek.webp",
];

const bentoPattern = [
  { col: "span 2", row: "span 2" },
  { col: "span 1", row: "span 2" },
  { col: "span 1", row: "span 1" },
  { col: "span 2", row: "span 1" },
  { col: "span 1", row: "span 1" },
  { col: "span 1", row: "span 2" },
  { col: "span 2", row: "span 2" },
  { col: "span 1", row: "span 1" },
];

const GalleryPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getGalleryTileStyle = (index) => {
    if (isMobile) return styles.galleryTile;
    const pattern = bentoPattern[index % bentoPattern.length];
    return {
      ...styles.galleryTile,
      gridColumn: pattern.col,
      gridRow: pattern.row,
    };
  };

  return (
    <div style={styles.page}>
      <SEO
        title="Gallery - Teakwood Forest Resort and Camp"
        description="Explore moments from Teakwood Forest Resort and Camp through our photo gallery of events, stays, and activities."
        keywords="Teakwood gallery, Resort photos, Event photos, Camp photos, Pune resort images"
        url="https://teakwoodcamping.com/gallery"
      />
      <section style={styles.section}>
        <h1 style={styles.heading}>Gallery</h1>
        <div
          style={{
            ...styles.galleryGrid,
            gridTemplateColumns: isMobile
              ? "repeat(2, minmax(0, 1fr))"
              : "repeat(4, minmax(0, 1fr))",
            gridAutoRows: isMobile ? "140px" : "170px",
          }}
        >
          {galleryImages.map((image, index) => (
            <figure key={`${image}-${index}`} style={getGalleryTileStyle(index)}>
              <img
                src={image}
                alt={`Teakwood gallery ${index + 1}`}
                loading="lazy"
                decoding="async"
                style={styles.galleryImage}
              />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#FAF7F2",
    minHeight: "100vh",
    padding: "120px 8%",
    fontFamily: "Poppins, sans-serif",
  },
  section: {
    marginBottom: "40px",
  },
  heading: {
    fontFamily: "Inter, sans-serif",
    fontSize: "2.2rem",
    fontWeight: "700",
    marginBottom: "40px",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#4b6043",
  },
  galleryGrid: {
    display: "grid",
    gap: "14px",
    gridAutoFlow: "dense",
  },
  galleryTile: {
    margin: 0,
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#dde4d3",
  },
  galleryImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
};

export default GalleryPage;
