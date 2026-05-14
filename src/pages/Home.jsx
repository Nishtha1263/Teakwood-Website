import React from "react";
import HomeCarousel from "../components/Home/Hero";
import Welcome from "../components/Home/Welcome";
import Amenities from "../components/Amenities/AmenitiesHome";
import Stay from "../components/Home/StayHome";
import Packages from "../components/Home/PackagesHome";
import Reviews from "../components/Home/Reviews";
import Events from "../components/Home/EventsHome";
import Property from "../components/Home/Property";
import MawlaRaceBanner from "../components/Home/MawlaRaceBanner";
import SEO from "./SEO";

const HomePage = () => {
  return (
    <div className="homepage">
      <SEO
        title="Best Resort Near Pune for Family Getaways, Events and Nature Stays"
        description="Teakwood Forest Resort and Camp is one of the best resorts near Pune for weekend getaways, family outings, corporate retreats, day picnics, and overnight stays. Located near Bhor in lush greenery, Teakwood offers cozy rooms, adventure activities, home-style food, bonfire evenings, and scenic spaces for celebrations."
        keywords="best resort near Pune, resort near Pune for family, weekend getaway near Pune, nature resort near Pune, camping resort near Pune, corporate retreat near Pune, day outing near Pune, overnight stay near Pune, picnic spot near Pune, Teakwood Forest Resort"
        url="https://teakwoodcamping.com/"
      />
      <HomeCarousel />
      <Welcome />
      <MawlaRaceBanner />
      <Events />
      <Amenities />
      <Stay />
      <Packages />
      <Property />
      <Reviews />
    </div>
  );
};

export default HomePage;
