import { HashRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

/* Home page layout */
function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
