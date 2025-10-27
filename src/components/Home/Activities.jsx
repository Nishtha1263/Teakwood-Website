import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Activities.css";
import bonfire from "../../assets/activity-bonfire.jpg";
import bbq from "../../assets/activity-bbq.jpg";
import games from "../../assets/activity-games.jpg";
import trek from "../../assets/activity-trek.jpg";

const activitiesData = [
  {
    title: "Bonfire Nights",
    description: "Gather around the crackling fire under starlit skies.",
    image: bonfire,
  },
  {
    title: "Barbecue Delight",
    description: "Fresh grilled delights in the heart of nature.",
    image: bbq,
  },
  {
    title: "Forest Trekking",
    description: "Explore scenic trails through lush greenery.",
    image: trek,
  },
  {
    title: "Outdoor Games",
    description: "Fun activities for the entire family.",
    image: games
  },
];

const Activities = () => {
  return (
    <section className="activities-section">
      <h2 className="activities-title">Activities</h2>

      <div className="activities-grid">
        {activitiesData.map((item, index) => (
          <div className="activity-card" key={index}>
            <div className="activity-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="activity-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more">
        <Link to="/experiences"><button className="view-more-btn">View More Experiences →</button></Link>
      </div>
    </section>
  );
};

export default Activities;
