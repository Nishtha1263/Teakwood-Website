import React, { useState } from "react";

const FAQ = () => {
  const [active, setActive] = useState(null);
  const toggle = (i) => setActive(active === i ? null : i);

  const faqs = [
    { q: "How far is Teakwood Resort from Pune?", a: "20kms from Katraj on Satara Road." },
    {
      q: "What is the accommodation capacity for Tents and Cottages?",
      a: "The tent accommodation can host up to 30 guests, while the cottages can accommodate up to 40 guests comfortably. Both options provide cozy bedding, clean washrooms, and access to all camp facilities for a comfortable stay.",
    },
    { q: "Is it Wheel Chair accessible?", a: "Yes." },
    {
      q: "Do you cater to veg & non veg food, both?",
      a: "Yes. The kitchen is fully equipped to cater separately to either type of meal preferences.",
    },
    {
      q: "Do you take bookings for couples?",
      a: "Teakwood is designed for group outings. To make the experience memorable, we recommend a minimum group of 6 to 8 guests.",
    },
    {
      q: "Are there any outdoor activities?",
      a: "Yes. Burma bridge, zip line, private trek, waterfall visit, farm tour and various group games can be played at the grounds inside the private forest.",
    },
    {
      q: "Can we bring our own food?",
      a: "No. Outside food is not allowed. We have a fully serviced restaurant and can cater to your preferences.",
    },
    { q: "Is there a power backup just in case?", a: "Yes. A 45KVA generator supports the complete Resort." },
    { q: "Is it pet friendly?", a: "No. We do not allow pets in the resort." },
    {
      q: "Are there different packages if we want to check in late?",
      a: "Yes. While filling out the inquiry form, please mention your preferred check-in time. Our team will respond with a customised package to suit your needs.",
    },
    {
      q: "Do you have rooms or tents?",
      a: "There are fully furnished cottages available. There is a tent camping experience package available on request too.",
    },
    {
      q: "How is the accommodation for Tent Camping?",
      a: "Tents are set up based on the group size. Each tent has a bed, bedding, pillow, blanket and access to well-maintained and clean washrooms with western toilets and shower area. The tent camping experience includes access to indoor gaming area as well as outdoor adventure area.",
    },
  ];

  return (
    <section style={styles.wrapper}>
      <h2 style={styles.title}>FAQ’s</h2>
      <div style={styles.container}>
        {faqs.map((item, i) => (
          <div key={i} style={styles.item}>
            <button
              onClick={() => toggle(i)}
              style={{
                ...styles.question,
                backgroundColor: active === i ? "#f9f9f9" : "#fff",
              }}
            >
              <span>{item.q}</span>
              <span style={styles.icon}>{active === i ? "−" : "+"}</span>
            </button>
            <div
              style={{
                ...styles.answer,
                maxHeight: active === i ? "300px" : "0",
                padding: active === i ? "10px 15px 20px" : "0 15px",
              }}
            >
              <p style={styles.text}>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    background: "#fff",
    width: "100%",
    padding: "110px 20px",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "700",
    color: "#222",
    marginBottom: "40px",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  item: {
    borderBottom: "1px solid #ddd",
  },
  question: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 10px",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    textAlign: "left",
    transition: "background 0.3s ease",
    fontFamily: "'Poppins', sans-serif",
  },
  icon: {
    fontSize: "22px",
    color: "#555",
    fontWeight: "700",
  },
  answer: {
    overflow: "hidden",
    transition: "all 0.3s ease",
    background: "#fff",
  },
  text: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    color: "#444",
  },
};

export default FAQ;
