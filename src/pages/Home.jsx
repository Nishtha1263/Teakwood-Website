import React from "react";
import HomeCarousel from "../components/Home/Hero";
import Welcome from "../components/Home/Welcome";
import Amenities from "../components/Amenities/AmenitiesHome";
import Activities from "../components/Home/Activities";
import Stay from "../components/Home/StayHome";
import Packages from "../components/Home/PackagesHome";
import Reviews from "../components/Home/Reviews";
import Contact from "../components/Home/ContactHome";

const HomePage = () => {
  return (
    <div className="homepage">
      <HomeCarousel />
      <Welcome />
      <Amenities />
      <Activities />
      <Stay />
      <Packages />
      <Reviews />
      <Contact />
    </div>
  );
};

export default HomePage;
