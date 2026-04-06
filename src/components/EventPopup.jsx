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

  /* ---------- AUTO STEP ---------- */
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setStep((prev) => (prev >= 2 ? prev : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [visible]);

  /* ---------- COUNTDOWN ---------- */
  useEffect(() => {
    if (step !== 2) return;

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
    if (step === 1) return "/events";
    return "/mawla-ghaati-run";
  };

  return (
    <div style={overlayStyle}>
      <div style={{ ...popupStyle, ...getTheme(step) }}>
        
        {/* SKIP */}
        <button style={closeBtn} onClick={() => setVisible(false)}>
          Skip ✕
        </button>

        {/* ---------- POPUP 1 ---------- */}
        {step === 0 && (
          <>
            <h2 style={headlineStyle}>OFF-ROAD EXPERIENCE</h2>

            <p style={subTextStyle}>
              Playtime ends. Trail time begins.
            </p>

            <p style={detailsStyle}>
              📅 18 April 2026 <br />
              ⏰ 6:00 AM – 10:00 AM
            </p>

            <p style={detailsStyle}>
              Breakfast Included • Private Track Access
            </p>

            <p style={noteStyle}>Limited slots. Riders only.</p>
          </>
        )}

        {/* ---------- POPUP 2 ---------- */}
        {step === 1 && (
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

        {/* ---------- POPUP 3 ---------- */}
        {step === 2 && (
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
          KNOW MORE
        </Link>

        {/* DOTS */}
        <div style={dotsWrapper}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                ...dot,
                opacity: step === i ? 1 : 0.3,
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
      background: "linear-gradient(135deg, #1a1a1a, #3a1f0f)",
      border: "1px solid rgba(255,140,66,0.4)",
    };
  }

  if (step === 1) {
    return {
      background: "linear-gradient(135deg, #1c3b26, #3e7d4f)",
      border: "1px solid rgba(144,238,144,0.4)",
    };
  }

  return {
    background: "linear-gradient(135deg, #1c3b26, #2f6f42)",
  };
};

/* ---------- COUNTDOWN BOX ---------- */

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
  inset: 0,
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  padding: "16px",
};

const popupStyle = {
  width: "100%",
  maxWidth: "420px",
  padding: "28px 20px",
  borderRadius: "16px",
  textAlign: "center",
  color: "#fff",
  position: "relative",
};

const closeBtn = {
  position: "absolute",
  top: "12px",
  right: "14px",
  background: "transparent",
  border: "none",
  color: "#fff",
  fontSize: "13px",
  cursor: "pointer",
};

const headlineStyle = {
  fontSize: "22px",
  fontWeight: "900",
  marginBottom: "10px",
  color: "white",
};

const subTextStyle = {
  fontSize: "14px",
  marginBottom: "14px",
  lineHeight: "1.5",
};

const detailsStyle = {
  fontSize: "13px",
  marginBottom: "10px",
  lineHeight: "1.5",
};

const noteStyle = {
  fontSize: "12px",
  color: "#ffb366",
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
  padding: "10px 4px",
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
  marginTop: "12px",
  padding: "14px",
  background: "#ff8c42",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "900",
};

const dotsWrapper = {
  marginTop: "14px",
};

const dot = {
  display: "inline-block",
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  background: "#fff",
  margin: "0 4px",
};