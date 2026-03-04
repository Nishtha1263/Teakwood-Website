import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EventPopup = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const [animate, setAnimate] = useState(false);

  const raceDate = new Date("June 5, 2026 04:00:00 GMT+0530").getTime();

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setVisible(true);
        setAnimate(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = raceDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });

        setAnimate(false);
        setTimeout(() => setAnimate(true), 50);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!visible || location.pathname !== "/") return null;

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <button style={closeBtn} onClick={() => setVisible(false)}>
          ×
        </button>

        <h2 style={headlineStyle}>
          THE GREAT MAWLA GHAATI ULTRA 2026
        </h2>

        <p style={subTextStyle}>
          <span style={highlightBadge}>OFFICIAL BASECAMP</span>
          <br />
          <span style={resortHighlight}>TEAKWOOD FOREST RESORT CAMP</span>
          <br />
          June 5–7 | Bhor, Pune
        </p>

        <div style={countdownWrapper}>
          {renderBox(timeLeft.days, "Days", animate)}
          {renderBox(timeLeft.hours, "Hrs", animate)}
          {renderBox(timeLeft.minutes, "Min", animate)}
          {renderBox(timeLeft.seconds, "Sec", animate)}
        </div>

        <a href="/mawla-ghaati-run" style={ctaStyle}>
          KNOW MORE
        </a>
      </div>
    </div>
  );
};

const renderBox = (value, label, animate) => (
  <div style={timeBox}>
    <div
      style={{
        ...timeNumber,
        transform: animate ? "rotateX(0deg)" : "rotateX(90deg)",
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
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const popupStyle = {
  width: "520px",
  maxWidth: "92%",
  padding: "40px 30px",
  borderRadius: "18px",
  textAlign: "center",
  background: "linear-gradient(135deg, #1c3b26, #2f6f42)",
  color: "#ffffff",
  boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
  position: "relative",
  animation: "popupEnter 0.6s ease-out",
};

const closeBtn = {
  position: "absolute",
  top: "14px",
  right: "18px",
  background: "transparent",
  border: "none",
  color: "#ffffff",
  fontSize: "22px",
  cursor: "pointer",
};

const headlineStyle = {
  fontSize: "30px",
  fontWeight: "900",
  marginBottom: "14px",
  letterSpacing: "1px",
  color: "#ffffff", // PURE WHITE
};

const subTextStyle = {
  fontSize: "14px",
  marginBottom: "28px",
  fontWeight: "500",
  lineHeight: "1.6",
};

const highlightBadge = {
  display: "inline-block",
  padding: "6px 18px",
  marginBottom: "12px",
  background: "#ff8c42",
  color: "#ffffff",
  fontWeight: "900",
  fontSize: "12px",
  borderRadius: "20px",
  letterSpacing: "1px",
};

const resortHighlight = {
  fontWeight: "900",
  color: "#ff8c42",
  letterSpacing: "1px",
};

const countdownWrapper = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "32px",
  perspective: "800px",
};

const timeBox = {
  width: "22%",
  background: "rgba(255,255,255,0.12)",
  borderRadius: "14px",
  padding: "18px 5px",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.3)",
  boxShadow: "0 12px 28px rgba(0,0,0,0.5)",
};

const timeNumber = {
  fontSize: "28px",
  fontWeight: "900",
  transition: "transform 0.4s ease",
};

const timeLabel = {
  fontSize: "12px",
  marginTop: "6px",
  letterSpacing: "1px",
  fontWeight: "700",
};

const ctaStyle = {
  display: "inline-block",
  padding: "16px 38px",
  backgroundColor: "#ff8c42",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "10px",
  fontWeight: "900",
  letterSpacing: "1px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
  transition: "transform 0.2s ease",
};