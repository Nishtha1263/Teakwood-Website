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
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";
import ActivitiesExperiences from "./pages/Activities-Experiences";
import FAQ from "./pages/FAQ";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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
          <FloatingButtons />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/stay" element={<Stay />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/events" element={<Events />} />
              <Route path="/activities" element={<ActivitiesExperiences />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
