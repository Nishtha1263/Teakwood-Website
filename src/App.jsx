import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/Floating";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Stay from "./pages/Stay";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";
import ActivitiesExperiences from "./pages/Activities-Experiences";
import FAQ from "./pages/FAQ";
import EventPopup from "./components/EventPopup";
import Mawla from "./pages/Mawla";
import DayOuting from "./pages/Day-outing";
import OvernightStay from "./pages/Overnight-stay";
import LadiesOuting from "./pages/Ladies-outing";
import CorporateRetreat from "./pages/Corporate-retreat";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const optimizeImage = (img) => {
      if (!(img instanceof HTMLImageElement)) return;
      if (!img.hasAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }
      if (!img.hasAttribute("decoding")) {
        img.setAttribute("decoding", "async");
      }
      if (!img.hasAttribute("fetchpriority")) {
        img.setAttribute("fetchpriority", "low");
      }
    };

    document.querySelectorAll("img").forEach(optimizeImage);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            optimizeImage(node);
            return;
          }
          if (node instanceof Element) {
            node.querySelectorAll("img").forEach(optimizeImage);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const images = Array.from(document.images);
    const totalImages = images.length;
    let loadedCount = 0;

    if (totalImages === 0) {
      setLoading(false);
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalImages) * 100);
      setProgress(newProgress);

      if (loadedCount === totalImages) {
        setTimeout(() => setLoading(false), 500); 
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        img.addEventListener("error", handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="loading-screen"
          >
            <div className="loading-bar-wrapper">
              <div
                className="loading-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="loading-text">{progress}%</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Header />
          <EventPopup />
          <FloatingButtons />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/stay" element={<Stay />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/activities" element={<ActivitiesExperiences />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/mawla-ghaati-run" element={<Mawla />} />
              <Route path="/day-outing" element={<DayOuting />} />
              <Route path="/overnight-stay" element={<OvernightStay />} />
              <Route path="/ladies-outing" element={<LadiesOuting />} />
              <Route path="/corporate-retreat" element={<CorporateRetreat />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
