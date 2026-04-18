import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// A simple wrapper to initialize AOS once
function Root() {
  useEffect(() => {
    AOS.init({
      duration: 1000,       // animation duration (ms)
      offset: 80,           // trigger point
      once: true,           // only animate once per element
      easing: "ease-in-out" // smooth easing
    });
    AOS.refresh();
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
