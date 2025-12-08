import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import StickyCTA from './components/StickyCTA';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Services from './pages/Services';
import Cleaning from './pages/Cleaning';
import PestControl from './pages/PestControl';
import About from './pages/About';
import FAQ from './pages/FAQ';
import HintsTips from './pages/HintsTips';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Cleaning Service Pages
import CarpetCleaning from './pages/cleaning/CarpetCleaning';
import TileGroutCleaning from './pages/cleaning/TileGroutCleaning';
import UpholsteryCleaning from './pages/cleaning/UpholsteryCleaning';
import LeatherCleaning from './pages/cleaning/LeatherCleaning';
import MouldRemoval from './pages/cleaning/MouldRemoval';
import RugCleaning from './pages/cleaning/RugCleaning';
import VehicleCleaning from './pages/cleaning/VehicleCleaning';
import FloodExtraction from './pages/cleaning/FloodExtraction';
import CommercialCleaning from './pages/cleaning/CommercialCleaning';
import BondCleaning from './pages/cleaning/BondCleaning';
import MattressCleaning from './pages/cleaning/MattressCleaning';
import CarpetProtection from './pages/cleaning/CarpetProtection';
import EncapsulationCleaning from './pages/cleaning/EncapsulationCleaning';
import CarpetRepairs from './pages/cleaning/CarpetRepairs';
import DuoCleaning from './pages/cleaning/DuoCleaning';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <SmoothScroll />
        <ScrollToTop />
        <div className="App">
          <Header />
          <StickyCTA />
          <ScrollToTopButton />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/cleaning" element={<Cleaning />} />
              <Route path="/cleaning/carpet-cleaning" element={<CarpetCleaning />} />
              <Route path="/cleaning/tile-grout" element={<TileGroutCleaning />} />
              <Route path="/cleaning/upholstery" element={<UpholsteryCleaning />} />
              <Route path="/cleaning/leather" element={<LeatherCleaning />} />
              <Route path="/cleaning/mould" element={<MouldRemoval />} />
              <Route path="/cleaning/rug" element={<RugCleaning />} />
              <Route path="/cleaning/vehicles" element={<VehicleCleaning />} />
              <Route path="/cleaning/flood" element={<FloodExtraction />} />
              <Route path="/cleaning/commercial" element={<CommercialCleaning />} />
              <Route path="/cleaning/bond" element={<BondCleaning />} />
              <Route path="/cleaning/mattress" element={<MattressCleaning />} />
              <Route path="/cleaning/protection" element={<CarpetProtection />} />
              <Route path="/cleaning/encapsulation" element={<EncapsulationCleaning />} />
              <Route path="/cleaning/repairs" element={<CarpetRepairs />} />
              <Route path="/cleaning/duo-system" element={<DuoCleaning />} />
              <Route path="/cleaning/:service" element={<Services />} />
              <Route path="/pest-control" element={<PestControl />} />
              <Route path="/about" element={<About />} />
              <Route path="/hints-tips" element={<HintsTips />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
