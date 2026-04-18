import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Destinations from "./components/Destinations/Destinations";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Fleet from "./components/Fleet/Fleet";
import Stats from "./components/Stats/Stats";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import ContactFooter from "./components/ContactFooter/ContactFooter";
import FloatingChatButton from "./components/FloatingChatButton/FloatingChatButton";
import MobileBottomNav from "./components/MobileBottomNav/MobileBottomNav";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,        // Faster, punchier animation duration
      once: true,           // only animate once per element
      offset: 50,           // Trigger slightly earlier to feel more responsive
      easing: "ease-out-cubic", // Snappy easing logic for a modern "classy" feel
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />

      <main>
        <Destinations />

        <section data-aos="fade-up">
          <Services />
        </section>

        <section data-aos="fade-right">
          <AboutUs />
        </section>

        <WhyChooseUs />

        <section data-aos="zoom-in">
          <Stats />
        </section>

        <section data-aos="fade-left">
          <Fleet />
        </section>

        <Testimonials />

        <section data-aos="fade-up">
          <Gallery />
        </section>
      </main>

      <ContactFooter />
      <FloatingChatButton />
      <MobileBottomNav />
    </div>
  );
}

export default App;
