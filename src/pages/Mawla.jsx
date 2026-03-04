import React from "react";

const MarqueeText = ({ text }) => {
  const containerStyle = {
    width: "100%",
    overflow: "hidden",
    height: "50px",
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
  };

  const contentStyle = {
    display: "inline-block",
    whiteSpace: "nowrap",
    paddingLeft: "100%", // start off-screen
    animation: "marquee 10s linear infinite",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#333",
  };

  const keyframes = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{keyframes}</style>
      <div style={contentStyle}>{text}</div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1>My React Page</h1>
      <MarqueeText text="Welcome to Mawla Ghaati! Scroll your text here..." />
    </div>
  );
}