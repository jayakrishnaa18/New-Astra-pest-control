import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
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
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <SmoothScroll />
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cleaning" element={<Cleaning />} />
            <Route path="/cleaning/:service" element={<Services />} />
            <Route path="/pest-control" element={<PestControl />} />
            <Route path="/pest-control/:pest" element={<Services />} />
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
  );
}

export default App;
