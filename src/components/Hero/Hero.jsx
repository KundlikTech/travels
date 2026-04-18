import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { FaSearch } from "react-icons/fa";
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
            Your Next Adventure Starts Here
          </h1>
          <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
            Discover unforgettable destinations with JK Travels.
          </p>

          <div
            className={styles.searchBar}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <input
              type="text"
              placeholder="Where do you want to go?"
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <FaSearch /> Find Tours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
