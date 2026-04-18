import React, { useRef, useState, useEffect } from "react";
import styles from "./Gallery.module.css";

const galleryImages = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery7.jpg",
  "/images/gallery/gallery8.jpg",
  "/images/gallery/gallery9.jpg",
  "/images/gallery/gallery10.jpg",
];

function Gallery() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", updateScroll);
      updateScroll();
    }
    return () => ref && ref.removeEventListener("scroll", updateScroll);
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amt = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amt : amt,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Travel Memories
        </h2>

        <div className={styles.wrapper} data-aos="fade-right">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`${styles.scrollBtn} ${!canScrollLeft ? styles.disabled : ""}`}
          >
            &lt;
          </button>

          <div className={styles.scroller} ref={scrollRef}>
            {galleryImages.map((src, i) => (
              <div className={styles.item} key={i} data-aos="zoom-in">
                <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`${styles.scrollBtn} ${!canScrollRight ? styles.disabled : ""}`}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
