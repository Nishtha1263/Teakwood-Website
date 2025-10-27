import React from "react";
import HomeCarousel from "../components/Home/Hero";
import Welcome from "../components/Home/Welcome";
import Amenities from "../components/Amenities/Amenities";
import Activities from "../components/Home/Activities";
import Stay from "../components/Home/Stay";
import Packages from "../components/Home/Packages";
import Reviews from "../components/Home/Reviews";
import Contact from "../components/Home/Contact";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* <HomeCarousel />
      <Welcome />
      <Amenities /> */}
      <Activities />
      {/* <Stay />
      <Packages />
      <Reviews />
      <Contact /> */}
    </div>
  );
};

export default HomePage;
