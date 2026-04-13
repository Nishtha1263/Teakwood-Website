import React from "react";

export default function LadiesOuting() {
  return (
    <>
      <head>
        <title>Ladies Outing Near Pune | Teakwood Camping</title>
        <meta name="description" content="Ladies outing near Pune with stay, meals, themed nights & workshops. Perfect for birthdays & bachelorettes." />
      </head>

      <div className="page">

        <section className="hero">
          <div className="overlay">
            <h1>Ladies Outing</h1>
            <p>Curated for your tribe ✨</p>
            <a href="https://wa.me/919881301029?text=Hi! I want to enquire about the ladies outing package." className="cta">
              Book Your Date
            </a>
          </div>
        </section>

        <section className="flow">
          <div className="content">
            <h2 style={{ textAlign: "center" }}>What Makes It Special</h2>
            <div className="grid">
              {["Stay + Meals", "Themed Evening", "Creative Workshop", "Campfire", "Photo Spots", "Adventure"].map((i,index)=>(
                <div key={index} className="card">{i}</div>
              ))}
            </div>

            <div className="highlight">
              Perfect for birthdays, bachelorettes & weekend getaways 💕
            </div>

            <div className="price">₹1900 / person</div>

            <a href="https://wa.me/919881301029?text=Hi! I want to enquire about ladies outing" className="cta secondary">
              Check Availability
            </a>
          </div>
        </section>

        <style>{`
          .page {font-family: Poppins; background:#fff7f9; }

          .hero {
            height:100vh;
            background:url('/public/ladies.webp') center/cover;
          }

          .overlay {
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:linear-gradient(180deg, rgba(255,105,135,0.4), rgba(0,0,0,0.7));
            color:white;
            text-align:center;
            padding:20px;
          }

          h1 { font-size:2.5rem; color: white;}

          .cta {
            margin-top:20px;
            background:#ff4d6d;
            padding:12px 22px;
            border-radius:30px;
            color:white;
            text-decoration:none;
          }

          .flow {
            margin-top:-60px;
            padding:40px 20px 80px;
            justify-content:center;
            align-items:center;
          }

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
            background:#fff0f3;
            padding:15px;
            border-radius:12px;
            text-align:center;
          }

          .highlight {
            margin:20px 0;
            font-weight:500;
            text-align:center;
          }

          .price {
            text-align:center;
            font-size:1.8rem;
            color:#ff4d6d;
            margin:20px 0;
          }

          .secondary {
            display:block;
            text-align:center;
            background:#4b6043;
          }
        `}</style>
      </div>
    </>
  );
}