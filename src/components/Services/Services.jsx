import React from "react";
import styles from "./Services.module.css";
import {
  FaCar,
  FaMapMarkedAlt,
  FaHotel,
  FaRoute,
} from "react-icons/fa";

const serviceItems = [
  {
    icon: <FaMapMarkedAlt />,
    title: "Tour Packages",
    desc: "Carefully curated itineraries taking you to lush valleys, historic monuments, and pristine beaches.",
    image: "/images/service-tours.png",
  },
  {
    icon: <FaCar />,
    title: "Cab Services",
    desc: "Reliable, comfortable outstation and local cab drops with professional drivers.",
    image: "/images/homepage.png",
  },
  {
    icon: <FaHotel />,
    title: "Hotel Bookings",
    desc: "Access competitive rates on luxury resorts, cozy homestays, and business hotels.",
    image: "/images/dest-goa.png",
  },
  {
    icon: <FaRoute />,
    title: "Custom Travel Planning",
    desc: "Tailored trips built exactly to your preferences, budget, and adventure goals.",
    image: "/images/corporate-tours.jpg",
  },
];

function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Explore Destinations with Ease
        </h2>
        <div className={styles.grid}>
          {serviceItems.map((s, i) => (
            <div
              key={i}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className={styles.imageBox}>
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className={styles.iconBadge}>{s.icon}</div>
              </div>
              <div className={styles.contentBox}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;


