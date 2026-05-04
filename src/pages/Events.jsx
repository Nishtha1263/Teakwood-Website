import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

const SEE_MORE_LINKS = {
  mawlaghaatiultrarun: "https://www.instagram.com/p/DX6xfkxClOB/?img_index=1",
  offroadexperienceday: "https://www.instagram.com/p/DXzBMnQiPO0/?img_index=1",
  valentinesday: "https://www.instagram.com/p/DUxP0mxgp4c/?img_index=1",
  birthdaycelebrations: "https://www.instagram.com/p/DCMo54XI1eU/",
  sundaybreakfastride: "https://www.instagram.com/p/DRzajWIiBpG/",
  newyearsevebash: "https://www.instagram.com/p/DEH1UhNoHNO/",
  rotaryclubannualpicnic: "https://www.instagram.com/p/DV71BxdCCGB/",
  holibash2025: "https://www.instagram.com/p/DHOKPwHIJyx/",
  summercamp2025: "https://www.instagram.com/p/DLOrQtAozO1/",
};

const EventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch("/events.txt")
      .then((res) => res.text())
      .then((text) => {
        const events = parseEvents(text);

        const upcoming = events.filter(
          (event) =>
            event.Category &&
            event.Category.toLowerCase().includes("upcoming")
        );
        const past = events.filter(
          (event) =>
            event.Category && event.Category.toLowerCase().includes("past")
        );

        setUpcomingEvents(upcoming);
        setPastEvents(past);
      })
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  const parseEvents = (text) => {
    const blocks = text
      .split("---")
      .map((block) => block.trim())
      .filter(Boolean);

    return blocks.map((block) => {
      const lines = block.split("\n").filter(Boolean);
      const obj = {};
      lines.forEach((line) => {
        const [key, ...rest] = line.split(":");
        obj[key.trim()] = rest.join(":").trim();
      });
      return obj;
    });
  };

  const formatDescription = (desc) => {
    if (!desc) return "";
    return desc.replace(/&nbsp;/g, "<br />");
  };

  const normalizeTitle = (title = "") =>
    title.toLowerCase().replace(/[^a-z0-9]/g, "");

  const EventCard = ({ event }) => {
    const title = event.Title?.toLowerCase() || "";
    const normalizedTitle = normalizeTitle(event.Title);
    const seeMoreLink = SEE_MORE_LINKS[normalizedTitle] || "#";
    const isUpcoming = event.Category?.toLowerCase() === "upcoming";
    let link = "";
    let isInternal = false;

    if (title.includes("off-road")) {
      link = "https://forms.gle/DWC3DsnMxa7HGGZHA";
    } else if (title.includes("summer camp")) {
      link =
        "https://docs.google.com/forms/d/e/1FAIpQLSeuiXRJfZLyP0syk49mUQjdFmCgg1wovQJpCujd0hW5bxtX8A/viewform?usp=send_form";
    } else if (title.includes("mawla")) {
      link = "/mawla-ghaati-run";
      isInternal = true;
    }

    return (
      <div style={styles.card}>
        {event.ImagePage && (
          <img
            src={event.ImagePage}
            alt={event.Title}
            style={{
              ...styles.image,
              height: isUpcoming ? (isMobile ? "160px" : "400px") : "400px",
            }}
          />
        )}
        <div style={styles.info}>
          <h3 style={styles.eventTitle}>{event.Title}</h3>
          <p>
            <strong>Date:</strong> {event.Date}
          </p>
          <p>
            <strong>Time:</strong> {event.Time}
          </p>
          <p>
            <strong>Price:</strong> {event.Price}
          </p>
          <p
            style={styles.desc}
            dangerouslySetInnerHTML={{
              __html: formatDescription(event.Description),
            }}
          ></p>

          <div style={styles.ctaRow}>
            {isUpcoming && link && (
              <>
                {isInternal ? (
                  <Link to={link} style={styles.bookBtn}>
                    Book Now
                  </Link>
                ) : (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.bookBtn}
                  >
                    Book Now
                  </a>
                )}
              </>
            )}
            <a
              href={seeMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.secondaryBtn}
            >
              See More
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.page}>
      <SEO
        title="Events & Celebrations - Corporate, Family & Group Events Near Pune"
        description="Host your event at Teakwood Forest Resort - ideal for corporate offsites, birthdays, family get-togethers, weddings, yoga retreats, and weekend celebrations surrounded by lush nature near Pune."
        keywords="Corporate events near Pune, Family celebrations Pune, Wedding venue Pune, Resort events Pune, Group outings Pune, Yoga retreat Pune, Birthday party resort Pune, Corporate retreat Pune, Team building Pune"
        url="https://teakwoodcamping.com/events"
      />

      <section style={styles.section}>
        <h1 style={styles.heading}>Upcoming Events</h1>
        {upcomingEvents.length > 0 ? (
          <div style={styles.grid}>
            {upcomingEvents.map((event, i) => (
              <EventCard key={i} event={event} />
            ))}
          </div>
        ) : (
          <p style={styles.noEvents}>No upcoming events right now.</p>
        )}
      </section>

      <section style={styles.section}>
        <h1 style={styles.heading}>Past Events</h1>
        {pastEvents.length > 0 ? (
          <div style={styles.grid}>
            {pastEvents.map((event, i) => (
              <EventCard key={i} event={event} />
            ))}
          </div>
        ) : (
          <p style={styles.noEvents}>No past events available.</p>
        )}
      </section>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#FAF7F2",
    color: "#fff",
    minHeight: "100vh",
    padding: "120px 8%",
    fontFamily: "Poppins, sans-serif",
  },
  section: {
    marginBottom: "80px",
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "#4b6043",
    color: "white",
    borderRadius: "15px",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    objectPosition: "center bottom",
  },
  info: {
    padding: "20px",
  },
  eventTitle: {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "10px",
  },
  desc: {
    marginTop: "10px",
    fontSize: "0.95rem",
    opacity: "0.9",
    lineHeight: "1.6",
  },
  ctaRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "15px",
  },
  bookBtn: {
    display: "inline-block",
    backgroundColor: "#7b8d64",
    color: "white",
    padding: "10px 24px",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  secondaryBtn: {
    display: "inline-block",
    backgroundColor: "#e6ecdc",
    color: "#3f5239",
    padding: "10px 24px",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  noEvents: {
    textAlign: "center",
    fontSize: "1.2rem",
    opacity: "0.7",
    color: "#4b6043",
  },
};

export default EventsPage;
