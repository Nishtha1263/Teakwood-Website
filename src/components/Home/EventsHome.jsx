import React, { useEffect } from "react";
import "./EventsHome.css";
import AOS from "aos";
import "aos/dist/aos.css";

import event1 from "../../assets/activity-trek.jpg";
import event2 from "../../assets/activity-trek.jpg";
import event3 from "../../assets/activity-trek.jpg";
import event4 from "../../assets/activity-trek.jpg";

const EventsHome = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="events-home">
      <div className="events-home-overlay"></div>

      <div className="events-home-content" data-aos="fade-up">
        <h2>Events at Teakwood</h2>
        <p>
          From cozy bonfire nights to thrilling outdoor adventures, every event at Teakwood
          is designed to bring people together in nature’s embrace.
        </p>
        <a href="/events" className="events-home-btn" data-aos="zoom-in">
          View All Events
        </a>
      </div>

      <div className="events-home-gallery" data-aos="fade-up">
        <div className="event-img"><img src={event1} alt="Event 1" /></div>
        <div className="event-img"><img src={event2} alt="Event 2" /></div>
        <div className="event-img"><img src={event3} alt="Event 3" /></div>
        <div className="event-img"><img src={event4} alt="Event 4" /></div>
      </div>
    </section>
  );
};

export default EventsHome;
