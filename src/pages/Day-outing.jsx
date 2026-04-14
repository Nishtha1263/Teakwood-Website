import React from "react";

export default function DayOuting() {
  return (
    <>
      <head>
        <title>Day Outing Near Pune | Teakwood Camping</title>
        <meta name="description" content="Day outing near Pune with trekking, zipline, waterfall and meals." />
      </head>

      <div className="page">

        <section className="hero">
          <div className="overlay">
            <h1>Day Outing</h1>
            <p>One day. Full reset 🌿</p>
            <a href="https://wa.me/919881301029?text=Hi! I want to enquire about the day outing package." className="cta">
              Book Now
            </a>
          </div>
        </section>

        <section className="flow">
          <div className="content">
            <h2 style={{ textAlign: "center" }}>Your Day Includes</h2>

            <div className="grid">
              {["Forest Trek", "Burma Bridge", "Zipline", "Indoor & Outdoor Games", "Waterfall", "Karaoke"].map((i,index)=>(
                <div key={index} className="card">{i}</div>
              ))}
            </div>

            <div className="price">Adults ₹1200 • Kids ₹800</div>

            <a href="https://wa.me/919881301029?text=Hi! I want to enquire about day outing" className="cta secondary">
              Check Slots
            </a>
          </div>
        </section>

        <style>{`
          .page {font-family: Poppins; background:#f4fbf4; }

          .hero {
            height:100vh;
            background:url('/balancebeam.webp') center/cover;
          }

          .overlay {
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:rgba(0,80,40,0.6);
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