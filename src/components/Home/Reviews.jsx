import React, { useEffect, useRef } from "react";
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
    name: "Nisha Gupta",
    text: "A wonderful retreat from the city. The food, the people, and the greenery make it magical.",
    rating: 5,
  },
];

const Reviews = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const slider = sliderRef.current;
    let scrollAmount = 0;

    const autoScroll = setInterval(() => {
      if (!slider) return;
      slider.scrollLeft += 1; // smooth horizontal movement
      scrollAmount += 1;

      // reset when reaching end
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
        slider.scrollLeft = 0;
        scrollAmount = 0;
      }
    }, 25); // speed control

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="reviews-section">
      {[...Array(8)].map((_, i) => (
        <span key={i} className={`review-leaf leaf${(i % 3) + 1}`}>
          {["🍃", "🌿", "🍂"][i % 3]}
        </span>
      ))}

      <h2 className="reviews-title" data-aos="fade-up">
        Hear from Our Happy Guests
      </h2>

      <div className="reviews-slider" ref={sliderRef}>
        {reviews.concat(reviews).map((review, index) => (
          <div className="review" key={index} data-aos="fade-up">
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
