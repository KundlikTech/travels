import React from "react";
import styles from "./AboutUs.module.css";

const aboutImg = "/images/about-premium.png"; // Replace with your scenic travel team image

function AboutUs() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutWrapper}>
          <div
            className={styles.imageBox}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img src={aboutImg} alt="Travel with JK Travels" loading="lazy" />
          </div>

          <div
            className={styles.textBox}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="section-title">Travel Smart with JK Travels</h2>
            <p>
              Your journey shouldn't be about stressing over logistics. At <strong>JK Travels</strong>, we live and breathe travel, curating experiences that let you simply sit back, relax, and soak in the beauty of your destination.
            </p>
            <p>
              Whether you're looking for an affordable weekend cab gateway, luxurious hotel reservations, or a meticulously planned multi-city corporate tour, our expert team manages every detail. Travel confidently knowing that your comfort and safety are our highest priorities.
            </p>

            <button className={styles.ctaBtn}>Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
