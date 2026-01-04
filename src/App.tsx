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

      {/* FAQ → Contact CTA */}
      <section className="bg-blue-50 py-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-lg md:text-xl text-slate-800 font-medium">
            Not sure which service you need? Send us a message — we’ll recommend
            the right next step for your business.
          </p>
        </div>
      </section>

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
