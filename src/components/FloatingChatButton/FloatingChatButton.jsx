import React, { useState } from "react";
import styles from "./FloatingChatButton.module.css";
import { FaCommentDots, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaTimes } from "react-icons/fa";

function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      // Trigger closing animation before hiding
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 350); // matches CSS animation duration
    } else {
      setIsOpen(true);
    }
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918767246048";
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918767246048", "_blank");
    setIsOpen(false);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:jktravels@gmail.com";
    setIsOpen(false);
  };

  return (
    <div className={styles.chatContainer}>
      {isOpen && (
        <div className={`${styles.menu} ${isClosing ? styles.closing : ""}`}>
          <div className={styles.menuItem} onClick={handlePhoneClick}>
            <FaPhoneAlt className={styles.icon} />
            <span className={styles.tooltip}>Call Us</span>
          </div>

          <div className={styles.menuItem} onClick={handleWhatsAppClick}>
            <FaWhatsapp className={styles.icon} />
            <span className={styles.tooltip}>Chat on WhatsApp</span>
          </div>

          <div className={styles.menuItem} onClick={handleEmailClick}>
            <FaEnvelope className={styles.icon} />
            <span className={styles.tooltip}>Send Email</span>
          </div>
        </div>
      )}

      <button
        className={`${styles.mainButton} ${isOpen ? styles.close : styles.open}`}
        onClick={toggleMenu}
        aria-label="Chat Options"
      >
        {isOpen ? <FaTimes /> : <FaCommentDots />}
      </button>
    </div>
  );
}

export default FloatingChatButton;
