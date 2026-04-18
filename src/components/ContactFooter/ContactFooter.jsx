import React from "react";
import styles from "./ContactFooter.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function ContactFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`${styles.overlay}`}></div>
      <div className="container">
        <div className={styles.grid}>
          {/* ====== Left Section - Contact Info ====== */}
          <div className={styles.info} data-aos="fade-right">
            <h2 className={styles.title}>Get in Touch</h2>
            <p className={styles.text}>
              Ready to plan your next trip? Reach out to us for custom packages, transport options, or corporate tours!
            </p>
            <ul className={styles.contactList}>
              <li><FaPhoneAlt /> +91 87672 46048</li>
              <li><FaEnvelope /> jktravels@gmail.com</li>
              <li><FaMapMarkerAlt /> Pune, Maharashtra, India</li>
            </ul>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook" data-aos="zoom-in"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" data-aos="zoom-in" data-aos-delay="100"><FaInstagram /></a>
              <a href="#" aria-label="Twitter" data-aos="zoom-in" data-aos-delay="200"><FaTwitter /></a>
            </div>
          </div>

          {/* ====== Right Section - Contact Form ====== */}
          <form className={styles.form} data-aos="fade-left">
            <h3>Send Us a Message</h3>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} JK Travels | All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default ContactFooter;
