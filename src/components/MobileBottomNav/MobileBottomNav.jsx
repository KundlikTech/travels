import React from "react";
import styles from "./MobileBottomNav.module.css";
import { FaPhoneAlt, FaWhatsapp, FaCar } from "react-icons/fa";

function MobileBottomNav() {
  return (
    <div className={styles.bottomNav}>
      <a href="tel:+919876543210" className={styles.navItem}>
        <FaPhoneAlt className={styles.icon} />
        <span>Call</span>
      </a>
      <a href="#services" className={styles.navItemMain}>
        <div className={styles.mainCircle}>
          <FaCar className={styles.mainIcon} />
        </div>
        <span>Book Cab</span>
      </a>
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.navItem}>
        <FaWhatsapp className={styles.iconWa} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default MobileBottomNav;
