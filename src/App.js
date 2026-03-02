import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ArticlePage from "./pages/ArticlePage";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";


function Particles() {
  return (
    <div id="particles" className="pointer-events-none fixed inset-0 -z-10">
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}



function App() {
  return (
    <HelmetProvider>
      <Particles />
      <Router>
        <Routes>
          {/* MAIN PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* DYNAMIC ARTICLE PAGE */}
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
