import React, { useEffect, useRef } from "react";
import "./Reviews.css";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";

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
  const controls = useAnimation();
  const x = useMotionValue(0);
  const contentWidth = useRef(0);
  const containerWidth = useRef(0);

  const duplicatedReviews = [...reviews, ...reviews];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const animate = async () => {
      const distance =
        contentWidth.current - containerWidth.current / 2 || 1000;
      await controls.start({
        x: -distance,
        transition: {
          duration: 30,
          ease: "linear",
        },
      });
      x.set(0);
      animate(); // loop
    };
    animate();
  }, [controls, x]);

  return (
    <section className="reviews-section">
      <h2 className="reviews-title" data-aos="fade-up">
        Hear from Our Happy Guests
      </h2>

      <div
        className="reviews-slider"
        ref={(el) => {
          if (el) containerWidth.current = el.offsetWidth;
        }}
      >
        <motion.div
          className="reviews-inner"
          style={{ display: "flex", gap: "30px", x }}
          animate={controls}
          ref={(el) => {
            if (el) contentWidth.current = el.scrollWidth;
          }}
        >
          {duplicatedReviews.map((review, index) => (
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
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
