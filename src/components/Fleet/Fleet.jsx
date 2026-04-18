import React, { useState, useEffect, useRef } from "react";
import styles from "./Fleet.module.css";
import toyotaInnova from "../../assets/images/toyota-innova.png";
import toyotaEtios from "../../assets/images/toyota-etios.png";

const fleetVehicles = [
  {
    name: "SUV (Toyota Innova)",
    seats: "5 + Driver",
    desc: "Perfect balance of space and luxury for family or business trips.",
    image: toyotaInnova,
  },
  {
    name: "Sedan (Toyota Etios)",
    seats: "3 + Driver",
    desc: "Comfortable, efficient, and ideal for everyday travel.",
    image: toyotaEtios,
  },
  {
    name: "Tempo Traveller",
    seats: "14",
    desc: "Ideal for group tours—spacious interiors with premium comfort.",
    image: "/images/tempo-traveller.png",
  },
  {
    name: "Large Coach",
    seats: "35 – 40",
    desc: "Best suited for group events and long-distance travel.",
    image: "/images/large-coach.png",
  },
  {
    name: "Volvo Bus",
    seats: "45",
    desc: "Experience unmatched luxury and smooth long-distance journeys.",
    image: "/images/volvo-bus.png",
  },
];

function Fleet() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setIndex((prev) => (prev + 1) % fleetVehicles.length);
    };
    timeoutRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  const goToSlide = (i) => {
    setIndex(i);
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(
      () => setIndex((prev) => (prev + 1) % fleetVehicles.length),
      5000
    );
  };

  return (
    <section id="fleet" className={styles.fleetSection}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Our Fleet
        </h2>

        <div className={styles.carouselWrapper} data-aos="fade-up">
          <div
            className={styles.carousel}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {fleetVehicles.map((v, i) => (
              <div className={styles.slide} key={i}>
                <div className={styles.text}>
                  <h3>{v.name}</h3>
                  <p className={styles.seats}>Seats: {v.seats}</p>
                  <p>{v.desc}</p>
                </div>
                <div className={styles.imageBox}>
                  <img src={v.image} alt={v.name} loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.indicators}>
            {fleetVehicles.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${
                  index === i ? styles.active : ""
                }`}
                onClick={() => goToSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fleet;
