import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Fleet from "./components/Fleet/Fleet";
import Gallery from "./components/Gallery/Gallery";
import Stats from "./components/Stats/Stats";
import ContactFooter from "./components/ContactFooter/ContactFooter";
import FloatingChatButton from "./components/FloatingChatButton/FloatingChatButton";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,   // smooth animation duration
      once: true,       // only animate once per element
      offset: 80,       // scroll offset before triggering
      easing: "ease-in-out", // consistent easing
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />

      <main>
        <section data-aos="fade-up">
          <Services />
        </section>

        <section data-aos="fade-right">
          <AboutUs />
        </section>

        <section data-aos="zoom-in">
          <Stats />
        </section>

        <section data-aos="fade-left">
          <Fleet />
        </section>

        <section data-aos="fade-up">
          <Gallery />
        </section>
      </main>

      <ContactFooter />
      <FloatingChatButton />
    </div>
  );
}

export default App;
