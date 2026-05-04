import React, { useEffect, useState } from "react";
import SEO from "./SEO";

const galleryImages = [
  "/group/teakwood-group-001.webp",
  "/group/teakwood-group-002.webp",
  "/group/teakwood-group-003.webp",
  "/group/teakwood-group-004.webp",
  "/group/teakwood-group-005.webp",
  "/group/teakwood-group-006.webp",
  "/group/teakwood-group-007.webp",
  "/group/teakwood-group-008.webp",
  "/group/teakwood-group-009.webp",
  "/group/teakwood-group-010.webp",
  "/group/teakwood-group-011.webp",
  "/group/teakwood-group-012.webp",
  "/group/teakwood-group-013.webp",
  "/group/teakwood-group-014.webp",
  "/group/teakwood-group-015.webp",
  "/group/teakwood-group-016.webp",
  "/group/teakwood-group-017.webp",
  "/group/teakwood-group-018.webp",
  "/group/teakwood-group-019.webp",
  "/group/teakwood-group-020.webp",
  "/group/teakwood-group-021.webp",
  "/group/teakwood-group-022.webp",
  "/group/teakwood-group-023.webp",
  "/group/teakwood-group-024.webp",
  "/group/teakwood-group-025.webp",
  "/group/teakwood-group-026.webp",
  "/group/teakwood-group-027.webp",
  "/group/teakwood-group-028.webp",
  "/group/teakwood-group-029.webp",
  "/group/teakwood-group-030.webp",
  "/group/teakwood-group-031.webp",
  "/group/teakwood-group-032.webp",
  "/group/teakwood-group-033.webp",
  "/group/teakwood-group-034.webp",
  "/group/teakwood-group-035.webp",
  "/group/teakwood-group-036.webp",
  "/group/teakwood-group-037.webp",
  "/group/teakwood-group-038.webp",
  "/group/teakwood-group-039.webp",
  "/group/teakwood-group-040.webp",
  "/group/teakwood-group-041.webp",
];

const GalleryPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            columnCount: isMobile ? 2 : 4,
          }}
        >
          {galleryImages.map((image, index) => (
            <figure key={`${image}-${index}`} style={styles.galleryTile}>
              <img
                src={image}
                alt={`Teakwood gallery ${index + 1}`}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                sizes="(max-width: 768px) 50vw, 25vw"
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
    columnGap: "12px",
  },
  galleryTile: {
    margin: 0,
    marginBottom: "12px",
    borderRadius: "8px",
    overflow: "hidden",
    contentVisibility: "auto",
    containIntrinsicSize: "240px 320px",
    breakInside: "avoid",
  },
  galleryImage: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    objectPosition: "center",
    display: "block",
  },
};

export default GalleryPage;
