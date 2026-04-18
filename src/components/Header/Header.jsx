import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isSticky ? styles.sticky : ""}`}
      data-aos="slide-down"
    >
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>JK Travels</h1>
          <p>Your Journey. Guaranteed.</p>
        </div>

        <div
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className={`${styles.iconWrapper} ${menuOpen ? styles.iconOpen : ""}`}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <ul
          className={`${styles.navLinks} ${
            menuOpen ? styles.activeMenu : ""
          }`}
        >
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About Us</a>
          </li>
          <li>
            <a href="#fleet" onClick={closeMenu}>Fleet</a>
          </li>
          <li>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
          <li>
            <button className={styles.bookBtn} onClick={closeMenu}>
              Book Now
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
