import React from "react";
import styles from "./Testimonials.module.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahul Verma",
    location: "Mumbai, India",
    text: "The best travel agency I've ever booked with! They arranged everything from my airport pickup to my hotel in Goa perfectly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "London, UK",
    text: "JK Travels made our trip to Rajasthan so magical and hassle-free. The driver was extremely polite and a great local guide.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Desai",
    location: "Delhi, India",
    text: "Very professional cab service. Booked a multi-city corporate tour and everything was on-time with transparent billing.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">
          What Our Travelers Say
        </h2>
        
        <div className={styles.slider}>
          {reviews.map((r, index) => (
            <div className={styles.card} key={r.id} data-aos="zoom-in" data-aos-delay={index * 150}>
              <FaQuoteLeft className={styles.quoteIcon} />
              <div className={styles.stars}>
                {[...Array(r.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className={styles.text}>"{r.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4>{r.name}</h4>
                  <p>{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
