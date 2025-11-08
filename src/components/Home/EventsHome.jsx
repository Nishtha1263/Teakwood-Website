import React, { useEffect, useState } from "react";
import "./EventsHome.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import bgCollage from "/hero1.webp";

const EventsHome = () => {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    fetch("/events.txt")
      .then((res) => res.text())
      .then((text) => {
        const entries = text.trim().split(/\n\s*\n/); 
        const firstEntry = entries[0].split("\n");
        const data = {};

        firstEntry.forEach((line) => {
          const [key, ...value] = line.split(":");
          data[key.trim().toLowerCase()] = value.join(":").trim();
        });

        setEventData(data);
      })
      .catch((err) => console.error("Error loading event data:", err));
  }, []);

  const formatDescription = (desc) => {
    if (!desc) return "";
    return desc.replace(/&nbsp;/g, "<br />");
  };

  if (!eventData) return null;

  return (
    <section
      className="events-home"
      style={{ backgroundImage: `url(${bgCollage})` }}
    >
      <div className="events-home-overlay"></div>

      <h2 className="events-heading" data-aos="fade-down">
        Upcoming Events
      </h2>

      <div className="events-home-container" data-aos="fade-up">
        <div className="events-home-image" data-aos="fade-right">
          <img src={eventData.image || "/images/default.webp"} alt={eventData.title} />
          <div className="events-home-date">
            <span className="day">{eventData.date?.split(" ")[1] || ""}</span>
            <span className="month">
              {eventData.date?.split(" ")[0]?.slice(0, 3).toUpperCase() || ""}
            </span>
          </div>
        </div>

        <div className="events-home-info" data-aos="fade-left">
          <h3>{eventData.title}</h3>
          <p className="event-detail">
            <strong>Date:</strong> {eventData.date}
          </p>
          <p className="event-detail">
            <strong>Time:</strong> {eventData.time}
          </p>
          <p className="event-detail">
            <strong>Price:</strong> {eventData.price}
          </p>

          <p
            dangerouslySetInnerHTML={{
              __html: formatDescription(eventData.description),
            }}
          ></p>

          <Link to="/events" className="events-home-btn">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsHome;