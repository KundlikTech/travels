import React from "react";
import styles from "./AboutUs.module.css";

const aboutImg = "/images/about-us.jpg"; // Replace with your scenic travel team image

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
            <img src={aboutImg} alt="About JK Travels" loading="lazy" />
          </div>

          <div
            className={styles.textBox}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="section-title">About JK Travels</h2>
            <p>
              At <strong>JK Travels</strong>, we’re passionate about helping you
              explore India and beyond with comfort and confidence. From
              corporate tours to family getaways, our team ensures a seamless,
              worry-free experience every time.
            </p>
            <p>
              With over a decade of trusted service, we’ve built lasting
              relationships through reliability, professionalism, and the joy of
              travel. Let us plan your next journey — where every mile feels
              like home.
            </p>

            <button className={styles.ctaBtn}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
