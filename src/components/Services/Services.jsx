import React from "react";
import styles from "./Services.module.css";
import {
  FaSuitcase,
  FaMountain,
  FaUsers,
  FaHotel,
  FaGraduationCap,
} from "react-icons/fa";

const serviceItems = [
  {
    icon: <FaSuitcase />,
    title: "Corporate Tours",
    desc: "Seamless travel solutions for your business needs.",
    image: "/images/corporate-tours.jpg",
  },
  {
    icon: <FaMountain />,
    title: "Tour Packages",
    desc: "Curated packages for unforgettable experiences.",
    image: "/images/tour-packages.jpg",
  },
  {
    icon: <FaUsers />,
    title: "Group & FIT Tours",
    desc: "Specialized tours for groups and solo travelers.",
    image: "/images/group-tours.jpg",
  },
  {
    icon: <FaHotel />,
    title: "Hotel Travel Desks",
    desc: "On-site assistance and bookings at your hotel.",
    image: "/images/hotel-desks.jpg",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education Tours",
    desc: "Enriching tours for educational institutions.",
    image: "/images/education-tours.jpg",
  },
];

function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Services We Offer
        </h2>
        <div className={styles.grid}>
          {serviceItems.map((s, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ backgroundImage: `url(${s.image})` }}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className={styles.overlay}>
                <div className={styles.icon}>{s.icon}</div>
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
