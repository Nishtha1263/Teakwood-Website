import React from "react";

export default function OvernightStay() {
  return (
    <>
      <head>
        <title>Overnight Camping Near Pune | Teakwood</title>
        <meta name="description" content="Overnight camping near Pune with bonfire, trekking & nature stay." />
      </head>

      <div className="page">

        <section className="hero">
          <div className="overlay">
            <h1>Overnight Stay</h1>
            <p>Slow down. Stay longer 🌙</p>
            <a href="https://wa.me/919881301029?text=Hi! I want to enquire about the overnight stay package." className="cta">
              Enquire Now
            </a>
          </div>
        </section>

        <section className="flow">
          <div className="content">
            <h2 style={{ textAlign: "center", color: "white"}}>Experience</h2>

            <div className="grid">
              {["Forest Trek", "Burma Bridge", "Zipline", "Indoor Games", "Outdoor Games", "Karaoke", "Bonfire"].map((i,index)=>(
                <div key={index} className="card">{i}</div>
              ))}
            </div>

            <div className="price">₹1700 / person</div>

            <a href="https://wa.me/919881301029?text=Hi! I want to enquire about overnight stay" className="cta secondary">
              Check Availability
            </a>
          </div>
        </section>

        <style>{`
          .page {font-family: Poppins; background:#f4fbf4; }

          .hero {
            height:100vh;
            background:url('/bonfire.webp') center/cover;
          }

          .overlay {
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:rgba(0, 37, 18, 0.6);
            color:white;
          }

           h1 { font-size:2.5rem; color: white;}

          .cta {
            margin-top:20px;
            background:#2e7d32;
            padding:12px 22px;
            border-radius:30px;
            color:white;
          }

          .flow { margin-top:-60px; padding:40px 20px 80px; }

          .content {
            background:white;
            border-radius:20px;
            padding:25px;
            box-shadow:0 10px 25px rgba(0,0,0,0.08);
          }

          .grid {
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:12px;
            margin:20px 0;
          }

          .card {
            background:#e8f5e9;
            padding:15px;
            border-radius:12px;
            text-align:center;
          }

          .price {
            text-align:center;
            font-size:1.5rem;
            margin:20px 0;
          }

          .secondary {
            display:block;
            text-align:center;
            background:#1b5e20;
          }
        `}</style>
      </div>
    </>
  );
}