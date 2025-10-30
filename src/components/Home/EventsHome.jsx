import React, { useEffect } from "react";
import "./EventsHome.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from "react-router-dom";

import bgCollage from "../../assets/contact-bg.jpg";
import event1 from "../../assets/contact-bg.jpg";

const EventsHome = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="events-home"
      style={{ backgroundImage: `url(${bgCollage})` }}
    >
      <div className="events-home-overlay"></div>

      <div className="events-home-container" data-aos="fade-up">
        <div className="events-home-image" data-aos="fade-right">
          <img src={event1} alt="Teakwood Event" />
          <div className="events-home-date">
            <span className="day">31</span>
            <span className="month">DEC</span>
          </div>
          <div className="events-home-title">
            <h3>New Year's Party</h3>
          </div>
        </div>

        <div className="events-home-info" data-aos="fade-left">
          <h2>Upcoming Events</h2>
          <p>
            From cozy bonfire nights to thrilling outdoor adventures and celebrating festivals, every event at
            Teakwood is designed to bring people together in nature’s embrace. Join
            us for an unforgettable evening of music, BBQ, and starlit skies.
          </p>
          <Link to="/events" className="events-home-btn">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsHome;
