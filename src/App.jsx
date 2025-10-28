// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
