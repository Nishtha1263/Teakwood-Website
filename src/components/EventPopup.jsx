import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function EventPopup() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
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
    if (!visible) return;

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
  }, [visible, raceDate]);

  if (!visible || location.pathname !== "/") return null;

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <button style={closeBtn} onClick={() => setVisible(false)}>
          x
        </button>

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

        <Link to="/mawla-ghaati-run" style={ctaStyle}>
          Explore
        </Link>
      </div>
    </div>
  );
}

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
  background: "linear-gradient(135deg, #1e5f3a, #2d8a57)",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
};

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

const ctaStyle = {
  display: "block",
  marginTop: "14px",
  padding: "13px",
  background: "#ffffff",
  color: "#111",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "900",
  letterSpacing: "0.5px",
  transition: "0.3s",
};
