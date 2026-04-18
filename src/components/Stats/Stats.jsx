import React, { useEffect, useState } from "react";
import styles from "./Stats.module.css";
import { FaSmile, FaMapMarkedAlt, FaUsers, FaBus } from "react-icons/fa";
import statsBg from "../../assets/images/stats-background.jpg";

const statsData = [
  { icon: <FaUsers />, label: "Happy Clients", value: 1200 },
  { icon: <FaMapMarkedAlt />, label: "Destinations Covered", value: 85 },
  { icon: <FaUsers />, label: "Group Tours", value: 250 },
  { icon: <FaBus />, label: "Fleet Vehicles", value: 40 },
];

function Stats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000; // total animation time (ms)
    const steps = 60;
    const interval = duration / steps;

    statsData.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          clearInterval(timer);
          current = stat.value;
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, interval);
    });
  }, []);

  return (
    <section 
      id="stats" 
      className={styles.statsSection}
      style={{ backgroundImage: `url(${statsBg})` }}
    >
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Our Achievements
        </h2>

        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={styles.statItem}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className={styles.icon}>{stat.icon}</div>
              <h3 className={styles.statNumber}>{counts[index]}+</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
