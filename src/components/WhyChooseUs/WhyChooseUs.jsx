import React from "react";
import styles from "./WhyChooseUs.module.css";
import { FaMoneyBillWave, FaHeadset, FaUserShield, FaThumbsUp } from "react-icons/fa";

const benefits = [
  {
    icon: <FaMoneyBillWave />,
    title: "Best Price Guarantee",
    desc: "Transparent pricing with zero hidden fees. You get exactly what you pay for.",
  },
  {
    icon: <FaUserShield />,
    title: "Trusted & Safe",
    desc: "Vetted professional drivers and curated stays ensure your complete safety.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our travel experts are available around the clock to assist you.",
  },
  {
    icon: <FaThumbsUp />,
    title: "High Customer Satisfaction",
    desc: "Thousands of happy travelers recommend our seamlessly planned trips.",
  },
];

function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.textBox} data-aos="fade-right">
            <h2 className="section-title">Why Choose JK Travels?</h2>
            <p className={styles.subtitle}>
              We believe travel should be easy, luxurious, and accessible. Over the years, we've perfected the art of creating worry-free journeys.
            </p>
            <div className={styles.grid}>
              {benefits.map((b, i) => (
                <div className={styles.benefitItem} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className={styles.icon}>{b.icon}</div>
                  <div>
                    <h4>{b.title}</h4>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageBox} data-aos="fade-left">
            <div className={styles.statsCard}>
           	  <h3>10k+</h3>
              <p>Happy Travelers</p>
            </div>
            <img src="/images/tour-packages.jpg" alt="Why choose us" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
