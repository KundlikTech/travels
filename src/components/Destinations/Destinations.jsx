import React from "react";
import styles from "./Destinations.module.css";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const featuredDestinations = [
  {
    id: 1,
    title: "Enchanting Kashmir",
    duration: "5 Days / 4 Nights",
    desc: "Experience the paradise on earth with pristine lakes and snow-capped peaks.",
    image: "/images/dest-kashmir.png",
  },
  {
    id: 2,
    title: "Goa Getaway",
    duration: "4 Days / 3 Nights",
    desc: "Relax on sun-kissed beaches and enjoy premium resort stays.",
    image: "/images/dest-goa.png",
  },
  {
    id: 3,
    title: "Majestic Rajasthan",
    duration: "7 Days / 6 Nights",
    desc: "Explore royal palaces, golden deserts, and vibrant cultural heritage.",
    image: "/images/dest-rajasthan.png",
  },
];

function Destinations() {
  return (
    <section id="destinations" className={styles.destinations}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title" data-aos="fade-up">Featured Destinations</h2>
          <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
            Handpicked tours designed for unforgettable memories.
          </p>
        </div>

        <div className={styles.grid}>
          {featuredDestinations.map((dest, index) => (
            <div
              key={dest.id}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className={styles.imageWrapper}>
                <img src={dest.image} alt={dest.title} loading="lazy" />
                <div className={styles.tag}>Best Seller</div>
              </div>
              <div className={styles.content}>
                <h3>{dest.title}</h3>
                <div className={styles.meta}>
                  <span><FaClock /> {dest.duration}</span>
                  <span><FaMapMarkerAlt /> India</span>
                </div>
                <p>{dest.desc}</p>
                <button className={styles.bookBtn}>View Itinerary</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
