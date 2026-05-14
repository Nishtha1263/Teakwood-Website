import React, { useEffect, useRef } from "react";
import "./Reviews.css";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useMotionValue } from "framer-motion";

const reviews = [
  {
    name: "Bhakti Gangakhedkar",
    text: "We had a great time here! The place is neat, tidy, and very well maintained. The air is fresh and pollution-free — perfect for a peaceful getaway.",
    rating: 5,
  },
  {
    name: "Ravi Pande",
    text: "Teakwood Forest Resort is an amazing place for family and friends. Scenic, green, and spacious — a refreshing escape from city life.",
    rating: 5,
  },
  {
    name: "Sharda Diwe",
    text: "Amazing food prepared and served with love by polite staff. Simple yet wonderful resort surrounded by nature. A truly memorable experience.",
    rating: 5,
  },
  {
    name: "Sachin Kolharkar",
    text: "Teakwood has transformed beautifully over my three visits. Excellent service, delicious food, clean rooms, and stunning surroundings.",
    rating: 5,
  },
  {
    name: "Lata Awasthi",
    text: "Awesome place near Pune to bond with friends and family. The natural setting, adventure activities, and views are beyond expectations!",
    rating: 5,
  },
  {
    name: "Jigna Thacker",
    text: "An unforgettable experience! The hospitality, food, and atmosphere were perfect. Best chai ever — truly picture perfect!",
    rating: 5,
  },
  {
    name: "Khushboo Shivnani",
    text: "Just returned from an awesome picnic at Teakwood! Beautiful scenery, great trails, and delicious meals. Can’t wait to visit again!",
    rating: 5,
  },
  {
    name: "Maitreyi Mishra",
    text: "So much fun! The resort is very clean and well maintained. The food is great, and the campfire made the night even more special.",
    rating: 5,
  },
  {
    name: "Prajakta Kulkarni",
    text: "Being here brought us closer to nature. Well-maintained resort, polite staff, delicious food, and exciting activities. A great experience!",
    rating: 5,
  },
  {
    name: "Anish Kale",
    text: "A peaceful retreat in the lap of nature. Clean rooms, hospitable staff, and serene surroundings — perfect for a weekend escape from Pune.",
    rating: 5,
  },
];

const Reviews = () => {
  const x = useMotionValue(0);
  const sliderRef = useRef(null);
  const innerRef = useRef(null);
  const loopWidth = useRef(0);
  const duplicatedReviews = [...reviews, ...reviews];
  const paused = useRef(false);

  useEffect(() => {
    AOS.init({ duration: 8000, once: true });
  }, []);

  useEffect(() => {
    const setWidths = () => {
      if (!innerRef.current) return;
      loopWidth.current = innerRef.current.scrollWidth / 2;
    };

    setWidths();
    const resizeObserver = new ResizeObserver(setWidths);
    if (sliderRef.current) resizeObserver.observe(sliderRef.current);

    let lastTime;
    let frameId;
    const speed = 28; // px/sec

    const loop = (timestamp) => {
      if (!lastTime) lastTime = timestamp;

      const delta = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      if (!paused.current && loopWidth.current > 0) {
        const currentX = x.get();
        let nextX = currentX - speed * delta;

        if (Math.abs(nextX) >= loopWidth.current) {
          nextX += loopWidth.current;
        }

        x.set(nextX);
      }

      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, [x]);

  return (
    <section className="reviews-section">
      <h2 className="reviews-title" data-aos="fade-up">
        Hear from Our Happy Guests
      </h2>

      <div
        className="reviews-slider"
        ref={sliderRef}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <motion.div
          className="reviews-inner"
          style={{ display: "flex", gap: "30px", x }}
          ref={innerRef}
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
