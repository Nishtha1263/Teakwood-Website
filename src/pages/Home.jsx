import React from "react";
import HomeCarousel from "../components/Home/Hero";
import Welcome from "../components/Home/Welcome";
import Amenities from "../components/Amenities/AmenitiesHome";
import Stay from "../components/Home/StayHome";
import Packages from "../components/Home/PackagesHome";
import Reviews from "../components/Home/Reviews";
import Contact from "../components/Home/ContactHome";
import Events from "../components/Home/EventsHome";

const HomePage = () => {
  return (
    <div className="homepage">
      <HomeCarousel />
      <Welcome />
      <Events />
      <Amenities />
      <Stay />
      <Packages />
      <Reviews />
      <Contact />
    </div>
  );
};

export default HomePage;
