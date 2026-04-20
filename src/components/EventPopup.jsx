import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function EventPopup() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  const [timeLeft, setTimeLeft] = useState({});
  const [animate, setAnimate] = useState(false);

  const raceDate = new Date("June 5, 2026 04:00:00 GMT+0530").getTime();

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

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

  const next = () => setStep((prev) => (prev === 1 ? 0 : prev + 1));
  const prev = () => setStep((prev) => (prev === 0 ? 1 : prev - 1));

  const getCtaLink = () => (step === 0 ? "/events" : "/mawla-ghaati-run");

  return (
    <div style={overlayStyle}>
      <div style={{ ...popupStyle, ...getTheme(step) }}>

        {/* CLOSE */}
        <button style={closeBtn} onClick={() => setVisible(false)}>✕</button>

        {/* NAV */}
        <button style={{ ...navBtn, left: "10px" }} onClick={prev}>‹</button>
        <button style={{ ...navBtn, right: "10px" }} onClick={next}>›</button>

        {/* CONTENT */}
        {step === 0 ? (
          <>
            <h2 style={headlineStyle}>SUMMER CAMP 2026</h2>
            <p style={subTextStyle}>3 days of adventure, learning & nature</p>

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
        ) : (
          <>
            <h2 style={headlineStyle}>MAWLA GHAATI ULTRA 2026</h2>
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
                opacity: step === i ? 1 : 0.4,
                transform: step === i ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- THEME ---------- */

const getTheme = (step) => {
  if (step === 0) {
    return {
      background: "linear-gradient(135deg, #ff7a18, #c94b00)",
      border: "1px solid rgba(255,255,255,0.25)",
      boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
    };
  }

  return {
    background: "linear-gradient(135deg, #1e5f3a, #2d8a57)",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
  };
};

/* ---------- COUNTDOWN ---------- */

const renderBox = (value, label, animate) => (
  <div style={timeBox}>
    <div
      style={{
        ...timeNumber,
        transform: animate ? "rotateX(0)" : "rotateX(90deg)",
        transition: "0.4s",
      }}
    >
      {value || 0}
    </div>
    <div style={timeLabel}>{label}</div>
  </div>
);

/* ---------- STYLES ---------- */

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.75)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const popupStyle = {
  width: "100%",
  maxWidth: "420px",
  padding: "28px",
  borderRadius: "20px",
  textAlign: "center",
  color: "#fff",
  position: "relative",
  backdropFilter: "blur(12px)",
};

/* Buttons */

const closeBtn = {
  position: "absolute",
  top: "12px",
  right: "14px",
  background: "rgba(255,255,255,0.15)",
  border: "none",
  color: "#fff",
  borderRadius: "50%",
  width: "28px",
  height: "28px",
  cursor: "pointer",
};

const navBtn = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff",
  borderRadius: "50%",
  width: "32px",
  height: "32px",
  cursor: "pointer",
};

/* Text */

const headlineStyle = {
  fontSize: "22px",
  fontWeight: "900",
  color: "#fff",
  marginBottom: "10px",
};

const subTextStyle = {
  fontSize: "14px",
  opacity: 0.9,
  marginBottom: "12px",
};

const detailsStyle = {
  fontSize: "13px",
  opacity: 0.85,
  marginBottom: "10px",
};

/* Countdown */

const countdownWrapper = {
  display: "flex",
  justifyContent: "space-between",
  margin: "20px 0",
};

const timeBox = {
  width: "22%",
  background: "rgba(255,255,255,0.12)",
  borderRadius: "10px",
  padding: "8px",
  border: "1px solid rgba(255,255,255,0.15)",
};

const timeNumber = {
  fontSize: "18px",
  fontWeight: "900",
};

const timeLabel = {
  fontSize: "10px",
};

/* CTA */

const ctaStyle = {
  display: "block",
  marginTop: "14px",
  padding: "13px",
  background: "#ffffff", // contrast CTA
  color: "#111",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "900",
  letterSpacing: "0.5px",
  transition: "0.3s",
};

/* Dots */

const dotsWrapper = {
  marginTop: "14px",
};

const dot = {
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  background: "#fff",
  display: "inline-block",
  margin: "0 4px",
};