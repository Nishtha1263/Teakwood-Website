import React, { useEffect } from "react";
import "./Reviews.css";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const reviews = [
  {
    name: "Rohit Sharma",
    text: "Such a peaceful place! The cottages are cozy, food is delicious, and the view is breathtaking. Perfect weekend escape.",
    rating: 5,
  },
  {
    name: "Aditi Mehta",
    text: "Loved the nature vibes. The bonfire night and barbecue dinner were the highlights of our stay!",
    rating: 5,
  },
  {
    name: "Karan Patel",
    text: "Ideal for family getaways — plenty of open space, great hospitality, and the kids had a blast with the outdoor games.",
    rating: 4,
  },
  {
    name: "Sneha Kulkarni",
    text: "The staff is warm and welcoming. Everything feels personal and homely — definitely coming back again!",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    text: "Such a peaceful place! The cottages are cozy, food is delicious, and the view is breathtaking. Perfect weekend escape.",
    rating: 5,
  },
  {
    name: "Aditi Mehta",
    text: "Loved the nature vibes. The bonfire night and barbecue dinner were the highlights of our stay!",
    rating: 5,
  },
  {
    name: "Karan Patel",
    text: "Ideal for family getaways — plenty of open space, great hospitality, and the kids had a blast with the outdoor games.",
    rating: 4,
  },
  {
    name: "Sneha Kulkarni",
    text: "The staff is warm and welcoming. Everything feels personal and homely — definitely coming back again!",
    rating: 5,
  },
];

const Reviews = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="reviews-section">
      {[...Array(8)].map((_, i) => (
        <span key={i} className={`review-leaf leaf${(i % 3) + 1}`}>
          {["🍃", "🌿", "🍂"][i % 3]}
        </span>
      ))}

      <h2 className="reviews-title">What Our Guests Say</h2>

      <div className="reviews-slider" data-aos="fade-up">
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <p className="review-text">“{review.text}”</p>
            <div className="review-rating">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="review-name">— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
