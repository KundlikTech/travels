import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
const heroBg = "/images/homepage.png";

function Hero() {
  const [bgLoaded, setBgLoaded] = useState(false);

  // Preload hero background image for instant display
  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className={`${styles.hero} ${bgLoaded ? styles.loaded : ""}`}
    >
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} data-aos="fade-up">
            Plan Your Dream Trip
          </h1>
          <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
            Premium cabs, curated tour packages, and unforgettable experiences with JK Travels. Travel smart, travel with ease.
          </p>

          <div
            className={styles.actionTokens}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="#services" className={styles.btnExplore}>
              <FaMapMarkedAlt /> Explore Packages
            </a>
            <a href="#contact" className={styles.btnBook}>
              <FaPhoneAlt /> Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

