import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

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
            event.Category &&
            event.Category.toLowerCase().includes("past")
        );

        setUpcomingEvents(upcoming);
        setPastEvents(past);
      })
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  const parseEvents = (text) => {
    const blocks = text.split("---").map((block) => block.trim()).filter(Boolean);

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

  const EventCard = ({ event }) => (
    <div style={styles.card}>
      {event.Image && (
        <img src={event.Image} alt={event.Title} style={styles.image} />
      )}
      <div style={styles.info}>
        <h3 style={styles.eventTitle}>{event.Title}</h3>
        <p><strong>Date:</strong> {event.Date}</p>
        <p><strong>Time:</strong> {event.Time}</p>
        <p><strong>Price:</strong> {event.Price}</p>
        <p style={styles.desc}>{event.Description}</p>

        {event.Category?.toLowerCase() === "upcoming" && (
          <Link to="/contact" style={styles.bookBtn}>
            Book Now
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div style={styles.page}>
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
    height: "220px",
    objectFit: "cover",
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
  bookBtn: {
    display: "inline-block",
    marginTop: "15px",
    backgroundColor: "#7b8d64",
    color: "white",
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
  },
};

export default EventsPage;
