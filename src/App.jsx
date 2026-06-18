import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/Floating";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Packages = lazy(() => import("./pages/Packages"));
const Stay = lazy(() => import("./pages/Stay"));
const Contact = lazy(() => import("./pages/Contact"));
const Events = lazy(() => import("./pages/Events"));
const Gallery = lazy(() => import("./pages/Gallery"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const ActivitiesExperiences = lazy(() =>
  import("./pages/Activities-Experiences")
);
const FAQ = lazy(() => import("./pages/FAQ"));
const Mawla = lazy(() => import("./pages/Mawla"));
const DayOuting = lazy(() => import("./pages/Day-outing"));
const OvernightStay = lazy(() => import("./pages/Overnight-stay"));
const LadiesOuting = lazy(() => import("./pages/Ladies-outing"));
const CorporateRetreat = lazy(() => import("./pages/Corporate-retreat"));

function RouteImagePriorityManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const updateImagePriority = () => {
      const images = Array.from(document.querySelectorAll("main img"));

      images.forEach((img, index) => {
        if (!(img instanceof HTMLImageElement)) return;

        if (index === 0) {
          img.loading = "eager";
          img.decoding = "sync";
          img.fetchPriority = "high";
          return;
        }

        img.loading = "lazy";
        img.decoding = "async";
        img.fetchPriority = "low";
      });
    };

    const animationFrame = window.requestAnimationFrame(updateImagePriority);
    const delayedPass = window.setTimeout(updateImagePriority, 180);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(delayedPass);
    };
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <RouteImagePriorityManager />
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
            <Suspense fallback={null}>
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
                <Route
                  path="/corporate-retreat"
                  element={<CorporateRetreat />}
                />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </>
      )}
      <SpeedInsights />
      <Analytics />
    </Router>
  );
}

export default App;
