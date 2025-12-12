import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Article1 from "./pages/Article1.jsx";
import Article2 from "./pages/Article2.jsx";
import Article3 from "./pages/Article3.jsx";
import Article4 from "./pages/Article4.jsx";
import Article5 from "./pages/Article5.jsx";
import Article6 from "./pages/Article6.jsx";
import Article7 from "./pages/Article7.jsx";
import Article8 from "./pages/Article8.jsx";

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
    <>
      <Particles />
      <Router>
        <Routes>
          {/* MAIN PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* ARTICLES */}
          <Route path="/article/1" element={<Article1 />} />
          <Route path="/article/2" element={<Article2 />} />
          <Route path="/article/3" element={<Article3 />} />
          <Route path="/article/4" element={<Article4 />} />
          <Route path="/article/5" element={<Article5 />} />
          <Route path="/article/6" element={<Article6 />} />
           <Route path="/article/7" element={<Article7 />} /> 
           <Route path="/article/8" element={<Article8 />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
