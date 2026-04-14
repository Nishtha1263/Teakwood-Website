import React from "react";

export default function CorporateRetreat() {
  return (
    <>
      <head>
        <title>Corporate Retreat Near Pune | Teakwood Camping</title>
        <meta name="description" content="Corporate retreat near Pune with team building, nature activities and custom packages." />
      </head>

      <div className="page">

        <section className="hero">
          <div className="overlay">
            <h1>Corporate Retreat</h1>
            <p>Where teams actually bond</p>
            <a href="https://wa.me/919881301029?text=Hi! I want to enquire about corporate retreat" className="cta">
              Get Proposal
            </a>
          </div>
        </section>

        <section className="flow">
          <div className="content">

            <h2 style={{ textAlign: "center" }}>What Your Team Will Do</h2>

            <div className="grid">
              {["Team Building Games", "Nature Trail Walk", "Survival Skills", "Campfire Bonding", "Outdoor Sports", "Obstacle Course Challenge", "Tree Plantation", "Barbecue", "Stargazing"].map((i,index)=>(
                <div key={index} className="card">{i}</div>
              ))}
            </div>

            <div className="price">Day ₹1200 • Overnight ₹1900</div>

            <a href="https://wa.me/919881301029?text=Hi! I want to enquire about corporate retreat" className="cta secondary">
              Request Plan
            </a>

          </div>
        </section>

        <style>{`
          .page { font-family: Poppins; background:#f0f6ff; }

          .hero {
            height:100vh;
            background:url('/corporate.webp') center/cover;
          }

          h1 { font-size:2.5rem; color: white;}

          .overlay {
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:rgba(0, 31, 61, 0.7);
            color:white;
          }

          .cta {
            margin-top:20px;
            background:#1976d2;
            padding:12px 22px;
            border-radius:30px;
            color:white;
          }

          .flow { margin-top:-60px; padding:40px 20px 100px; }

          .content {
            background:white;
            border-radius:20px;
            padding:25px;
            box-shadow:0 10px 30px rgba(0,0,0,0.08);
          }

          .grid {
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:12px;
            margin:20px 0;
          }

          .card {
            background:#e3f2fd;
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
            background:#0d47a1;
          }
        `}</style>
      </div>
    </>
  );
}