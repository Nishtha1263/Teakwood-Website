import React, { useEffect, useState } from "react";
import SEO from "./SEO";

const makeImages = (folder, prefix, count) =>
  Array.from({ length: count }, (_, i) => {
    const index = String(i + 1).padStart(3, "0");
    return `/gallery/${folder}/${prefix}-${index}.webp`;
  });

const sectionImages = {
  room: makeImages("Room", "teakwood-room", 7),
  property: makeImages("Property", "teakwood-property", 8),
  "group-events": makeImages("Group", "teakwood-group-events", 17),
  biking: makeImages("Biking", "teakwood-biking", 6),
  "summer-camp": makeImages("Summer_Camp", "teakwood-summer-camp", 6),
  "ladies-outing": makeImages("Ladies Outing", "teakwood-ladies-outing", 5),
  corporate: makeImages("Corporate", "teakwood-corporate", 16),
};

const sections = [
  { id: "room", title: "Room" },
  { id: "property", title: "Property" },
  { id: "group-events", title: "Group Events" },
  { id: "biking", title: "Biking" },
  { id: "summer-camp", title: "Summer Camp" },
  { id: "ladies-outing", title: "Ladies Outing" },
  { id: "corporate", title: "Corporate" },
];

const GallerySection = ({ sectionItem, sectionIndex, columns }) => {
  const [isActive, setIsActive] = useState(sectionIndex === 0);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    if (isActive) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "350px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isActive]);

  return (
    <div id={sectionItem.id} ref={sectionRef} style={styles.sectionBlock}>
      <h2 style={styles.sectionTitle}>{sectionItem.title}</h2>
      {isActive ? (
        <div
          style={{
            ...styles.galleryGrid,
            columnCount: columns,
          }}
        >
          {(sectionImages[sectionItem.id] || []).map((image, index) => (
            <figure key={`${sectionItem.id}-${index}`} style={styles.galleryTile}>
              <img
                src={image}
                alt={`${sectionItem.title} gallery ${index + 1}`}
                loading={sectionIndex === 0 && index < 4 ? "eager" : "lazy"}
                decoding={sectionIndex === 0 && index < 4 ? "sync" : "async"}
                fetchPriority={sectionIndex === 0 && index < 4 ? "high" : "low"}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                style={styles.galleryImage}
              />
            </figure>
          ))}
        </div>
      ) : (
        <div style={styles.sectionPlaceholder} />
      )}
    </div>
  );
};

const GalleryPage = () => {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const setByWidth = () => {
      if (window.innerWidth >= 1200) {
        setColumns(4);
        return;
      }
      if (window.innerWidth >= 768) {
        setColumns(3);
        return;
      }
      setColumns(2);
    };

    setByWidth();
    window.addEventListener("resize", setByWidth);
    return () => window.removeEventListener("resize", setByWidth);
  }, []);

  return (
    <div style={styles.page}>
      <SEO
        title="Gallery - Teakwood Forest Resort and Camp"
        description="Explore room views, property spaces, group events, biking, summer camp, ladies outing, and corporate moments at Teakwood Forest Resort and Camp."
        keywords="Teakwood gallery, room photos, property photos, group events, biking, summer camp, ladies outing, corporate events Pune"
        url="https://teakwoodcamping.com/gallery"
      />

      <section style={styles.section}>
        <h1 style={styles.heading}>Gallery</h1>

        {sections.map((sectionItem, sectionIndex) => (
          <GallerySection
            key={sectionItem.id}
            sectionItem={sectionItem}
            sectionIndex={sectionIndex}
            columns={columns}
          />
        ))}
      </section>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#FAF7F2",
    minHeight: "100vh",
    padding: "120px 5% 64px",
    fontFamily: "Poppins, sans-serif",
    overflowX: "hidden",
    WebkitOverflowScrolling: "touch",
  },
  section: {
    marginBottom: "36px",
  },
  heading: {
    fontFamily: "Inter, sans-serif",
    fontSize: "2rem",
    fontWeight: "800",
    marginBottom: "22px",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#4b6043",
  },
  sectionBlock: {
    marginTop: "36px",
    scrollMarginTop: "110px",
    paddingTop: "14px",
    borderTop: "2px solid #d8dfcf",
    overflowAnchor: "none",
  },
  sectionTitle: {
    fontFamily: "Inter, sans-serif",
    fontSize: "1.5rem",
    fontWeight: "800",
    letterSpacing: "0.3px",
    marginBottom: "14px",
    color: "#2f3f2a",
    textTransform: "uppercase",
  },
  galleryGrid: {
    columnGap: "12px",
    overflowAnchor: "none",
  },
  galleryTile: {
    margin: 0,
    marginBottom: "12px",
    lineHeight: 0,
    borderRadius: "10px",
    overflow: "hidden",
    breakInside: "avoid",
  },
  galleryImage: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    objectPosition: "center",
    display: "block",
  },
  sectionPlaceholder: {
    height: "220px",
    borderRadius: "10px",
    background: "#e7ede0",
  },
};

export default GalleryPage;
