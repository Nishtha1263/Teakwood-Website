import React, { useEffect, useState } from "react";
import heroBg from "/mawlabg.png";
import stayImg from "/hero.webp";

export default function MawlaUltraPremium() {

  /* COUNTDOWN */
  const calculateTimeLeft = () => {
    const difference =
      new Date("2026-06-05T00:00:00").getTime() - new Date().getTime();

    if (difference <= 0) return {};

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="container">

        {/* MARQUEE ABOVE HERO */}
        <section className="marqueeSection">
          <div className="marqueeTrack">
            LIVE AVAILABILITY — Cottage: 8 | Dorm: 20 | Bamboo: 10 | Large Tent: 3 | Family: 2 | Mid Tent: 1
          </div>
        </section>

        {/* HERO */}
        <section
          className="hero"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="overlay"></div>

          <div className="heroContent">
            <span className="tag">VENUE PARTNER – TEAKWOOD</span>

            <h1>THE GREAT MAWLA GHAATI ULTRA 2026</h1>

            <p>Stay inside the race venue. Built for endurance athletes.</p>

            <div className="countdown">
              {Object.keys(timeLeft).map((interval) => (
                <div key={interval}>
                  <span>{timeLeft[interval]}</span>
                  <small>{interval}</small>
                </div>
              ))}
            </div>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLScUySdc26xVmJ6GalIOQFv03B1j5nLoRyyV0L4TFRugk6mY0Q/viewform?usp=publish-editor" className="btnPrimary">BOOK YOUR STAY</a>
          </div>
        </section>

        {/* ACCOMMODATION */}
        <section className="accommodation">
            <h2 style={{ color: "#4b6043" }}>
                Accommodation at the Venue
            </h2>

            <div className="cardGrid">
                {[
                ["Cottage Dormitory", "11 Persons", "₹1500 / person"],
                ["Dormitory Hall", "28 Persons", "₹1400 / person"],
                ["Bamboo House", "18 Persons", "₹1400 / person"],
                ["Large Tent", "6 Persons", "₹1200 / person"],
                ["Family Tent", "4 Person Tent", "₹4000 Complete"],
                ["Mid Size Tent", "3 Person Tent", "₹3000 Complete"],
                ].map((item, i) => (
                <div className="card" key={i}>
                    <h3>{item[0]}</h3>
                    <p>{item[1]}</p>
                    <span className="price">{item[2]}</span>
                </div>
                ))}
            </div>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLScUySdc26xVmJ6GalIOQFv03B1j5nLoRyyV0L4TFRugk6mY0Q/viewform?usp=publish-editor" className="btnPrimary centerBtn">
            RESERVE YOUR ACCOMMODATION
          </a>
        </section>

        {/* RACE DETAILS */}
        <section className="raceDetails">
          <h2 style={{ color: "#4b6043" }}>Race Overview</h2>

          <div className="detailsWrapper">
            {[
              ["📅", "Date", "5 – 7 June 2026"],
              ["🏃", "Distances", "10K | 25K | 50K | 75K | 100K | 100M | 200M"],
              ["⏰", "Start Time", "As per category"],
              ["📍", "Venue", "Teakwood Forest Resort & Camp"],
            ].map((item, i) => (
              <div className="detailCard" key={i}>
                <div className="iconCircle">{item[0]}</div>
                <h4>{item[1]}</h4>
                <p>{item[2]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IMPORTANT INFO */}
        <section className="infoSplit">
          <div className="imageSide">
            <img src={stayImg} alt="Teakwood Stay" />
          </div>

          <div className="textSide">
            <h2 style={{ color: "#4b6043" }}>Important Information</h2>
            <ul>
              <li style={{ color: "black" }}>Only registered participants allowed.</li>
              <li style={{ color: "black" }}>Check-in from 2 PM.</li>
              <li style={{ color: "black" }}>Store luggage before race start.</li>
              <li style={{ color: "black" }}>Non-refundable bookings & Non-transferrable booking.</li>
            </ul>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLScUySdc26xVmJ6GalIOQFv03B1j5nLoRyyV0L4TFRugk6mY0Q/viewform?usp=publish-editor" className="btnPrimary">BOOK NOW</a>
          </div>
        </section>

      </div>

      <style jsx>{`

        :root {
          --brandGreen: #4b6043;
          --orange: #f97316;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
          color: white;
        }

        .container {
          padding-top: 90px; /* adjust to match your header height */
        }

        .h3 {
        color: white;
        }

        section {
          padding: 100px 10%;
          position: relative;
        }

        /* MARQUEE */
        .marqueeSection {
          background: var(--orange);
          padding: 20px 0;
          overflow: hidden;
          font-size: 1.4rem;
          font-weight: 600;
        }

        .marqueeTrack {
          white-space: nowrap;
          padding-left: 100%;
          animation: scroll 14s linear infinite;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }

        /* HERO */
        .hero {
          height: 95vh;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.85), rgba(75,96,67,0.7));
        }

        .heroContent {
          position: relative;
          max-width: 650px;
        }

        .hero h1 {
          font-size: 3rem;
          margin: 20px 0;
          color: #ffffff;
        }

        /* COUNTDOWN */
        .countdown {
          display: flex;
          gap: 25px;
          margin: 25px 0;
        }

        .countdown span {
          font-size: 1.8rem;
          font-weight: 600;
          display: block;
        }

        .countdown small {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        /* ACCOMMODATION */
        .accommodation {
          background: #ffffff;
          text-align: center;
        }

        .accommodation .card h3,
        .accommodation .card p,
        .accommodation .card .price {
            color: white !important;
        }

        .cardGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 50px;
        }

        .card {
          padding: 40px 20px;
          background: #4b6043;
          color: #ffffff;
          border-radius: 16px;
        }

        /* RACE DETAILS */
        .raceDetails {
          background: linear-gradient(
                135deg,
                #e6f4ea 0%,
                #f2fbf5 50%,
                #e9f8f0 100%
            );
          text-align: center;
        }

        .detailsWrapper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 50px;
        }

        .iconCircle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(86, 86, 86, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .detailsWrapper,
        .detailsWrapper * {
            color: black !important;
        }

        /* Increase icon circle size by 30% */
        .iconCircle {
            width: 91px;   /* was 70px → +30% */
            height: 91px;  /* was 70px → +30% */
            font-size: 1.95rem; /* increase emoji size proportionally */
        }

        /* INFO SPLIT */
        .infoSplit {
          background: white;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .imageSide img {
          width: 100%;
          border-radius: 20px;
        }

        .btnPrimary {
          display: inline-block;
          margin-top: 30px;
          padding: 14px 35px;
          background: var(--orange);
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
        }

        /* MOBILE */
        @media (max-width: 768px) {

          .hero h1 { font-size: 1.4rem; }
          .hero p { font-size: 1.2rem; }

          .detailCard p { font-size: 0.8rem; }

          .cardGrid,
          .detailsWrapper,
          .infoSplit {
            grid-template-columns: 1fr;
          }

          .countdown {
            flex-wrap: wrap;
            gap: 15px;
          }
        }

      `}</style>
    </>
  );
}