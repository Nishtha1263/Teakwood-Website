import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const EventPopup = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  const [timeLeft, setTimeLeft] = useState({});
  const [animate, setAnimate] = useState(false);

  const raceDate = new Date("June 5, 2026 04:00:00 GMT+0530").getTime();

  /* ---------- SHOW POPUP ---------- */
  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  /* ---------- COUNTDOWN ---------- */
  useEffect(() => {
    if (step !== 1) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = raceDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });

        setAnimate(false);
        setTimeout(() => setAnimate(true), 50);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [step]);

  if (!visible || location.pathname !== "/") return null;

  /* ---------- CTA LINKS ---------- */
  const getCtaLink = () => {
    if (step === 0) return "/events";
    return "/mawla-ghaati-run";
  };

  /* ---------- NAVIGATION ---------- */
  const next = () => setStep((prev) => (prev === 1 ? 0 : prev + 1));
  const prev = () => setStep((prev) => (prev === 0 ? 1 : prev - 1));

  return (
    <div style={overlayStyle}>
      <div style={{ ...popupStyle, ...getTheme(step) }}>

        {/* CLOSE */}
        <button style={closeBtn} onClick={() => setVisible(false)}>
          ✕
        </button>

        {/* NAV */}
        <button style={{ ...navBtn, left: "10px" }} onClick={prev}>
          ‹
        </button>
        <button style={{ ...navBtn, right: "10px" }} onClick={next}>
          ›
        </button>

        {/* ---------- POPUP 1 ---------- */}
        {step === 0 && (
          <>
            <h2 style={headlineStyle}>SUMMER CAMP 2026</h2>

            <p style={subTextStyle}>
              3 days of adventure, learning & nature
            </p>

            <p style={detailsStyle}>
              📅 8–10 May <br />
              ₹8000 per person <br />
              ₹7500 (Group of 3+)
            </p>

            <p style={detailsStyle}>
              Trekking • Waterfall • Rifle Shooting <br />
              Carpentry • Camping • Star Gazing
            </p>
          </>
        )}

        {/* ---------- POPUP 2 ---------- */}
        {step === 1 && (
          <>
            <h2 style={headlineStyle}>
              MAWLA GHAATI ULTRA 2026
            </h2>

            <p style={subTextStyle}>
              Official Basecamp <br />
              <strong>Teakwood Forest Resort</strong>
            </p>

            <div style={countdownWrapper}>
              {renderBox(timeLeft.days, "D", animate)}
              {renderBox(timeLeft.hours, "H", animate)}
              {renderBox(timeLeft.minutes, "M", animate)}
              {renderBox(timeLeft.seconds, "S", animate)}
            </div>
          </>
        )}

        {/* CTA */}
        <Link to={getCtaLink()} style={ctaStyle}>
          Explore →
        </Link>

        {/* DOTS */}
        <div style={dotsWrapper}>
          {[0, 1].map((i) => (
            <span
              key={i}
              onClick={() => setStep(i)}
              style={{
                ...dot,
                transform: step === i ? "scale(1.4)" : "scale(1)",
                opacity: step === i ? 1 : 0.4,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------- THEMES ---------- */

const getTheme = (step) => {
  if (step === 0) {
    return {
      background: "linear-gradient(135deg, #ff7e00, #ffb347)", // bright summer
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.3)",
      boxShadow: "0 15px 50px rgba(255,126,0,0.5)",
    };
  }

  return {
    background: "linear-gradient(135deg, #1f7a4c, #34c759)", // rich green
    backdropFilter: "blur(10px)",
    boxShadow: "0 15px 50px rgba(0,0,0,0.4)",
  };
};

/* ---------- COUNTDOWN BOX ---------- */

const renderBox = (value, label, animate) => (
  <div style={timeBox}>
    <div
      style={{
        ...timeNumber,
        transform: animate ? "rotateX(0deg)" : "rotateX(90deg)",
        transition: "0.4s",
      }}
    >
      {value || 0}
    </div>
    <div style={timeLabel}>{label}</div>
  </div>
);

export default EventPopup;

/* ---------- STYLES ---------- */

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.75)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  padding: "16px",
};

const popupStyle = {
  width: "100%",
  maxWidth: "420px",
  padding: "30px 22px",
  borderRadius: "20px",
  textAlign: "center",
  color: "#fff",
  position: "relative",
  transition: "0.4s",
};

const closeBtn = {
  position: "absolute",
  top: "14px",
  right: "16px",
  background: "rgba(255,255,255,0.15)",
  border: "none",
  color: "#fff",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: "14px",
};

const navBtn = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(255,255,255,0.2)",
  border: "none",
  color: "#fff",
  fontSize: "22px",
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  cursor: "pointer",
};

const headlineStyle = {
  fontSize: "22px",
  fontWeight: "900",
  marginBottom: "10px",
  color: "#ffffff",
  letterSpacing: "0.5px",
  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
};

const subTextStyle = {
  fontSize: "14px",
  marginBottom: "14px",
  lineHeight: "1.5",
  color: "rgba(255,255,255,0.95)",
};

const detailsStyle = {
  fontSize: "13px",
  marginBottom: "10px",
  lineHeight: "1.6",
  color: "rgba(255,255,255,0.9)",
};

const countdownWrapper = {
  display: "flex",
  justifyContent: "space-between",
  margin: "20px 0",
};

const timeBox = {
  width: "22%",
  background: "rgba(255,255,255,0.2)",
  borderRadius: "12px",
  padding: "10px 4px",
};

const timeNumber = {
  fontSize: "18px",
  fontWeight: "900",
};

const timeLabel = {
  fontSize: "10px",
  opacity: 0.8,
};

const ctaStyle = {
  display: "block",
  marginTop: "14px",
  padding: "14px",
  background: "linear-gradient(135deg, #ff3d00, #ff7a00)",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "10px",
  fontWeight: "900",
  letterSpacing: "0.5px",
  boxShadow: "0 8px 20px rgba(255,61,0,0.4)",
};

const dotsWrapper = {
  marginTop: "16px",
};

const dot = {
  display: "inline-block",
  width: "7px",
  height: "7px",
  borderRadius: "50%",
  background: "#fff",
  margin: "0 5px",
  transition: "0.3s",
};