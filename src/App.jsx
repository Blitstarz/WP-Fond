import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import AboutProgram from './pages/AboutProgram/AboutProgram';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import SuccessStories from './pages/SuccessStories/SuccessStories';
import Partners from './pages/Partners/Partners';
import FAQ from './pages/FAQ/FAQ';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService/TermsOfService';

function App() {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    const isInitialLoad = !window.location.hash && window.performance.navigation.type === 0;
    
    if (isInitialLoad) {
      const forceScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };
      
      forceScrollToTop();
      setTimeout(forceScrollToTop, 0);
      setTimeout(forceScrollToTop, 50);
    }
    
    setTimeout(() => {
      document.documentElement.classList.add('smooth-scroll');
    }, 100);

    const handleBeforeUnload = () => {
      if (window.performance.navigation.type === 1) {
        window.scrollTo(0, 0);
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden && location.pathname === '/' && !location.hash) {
        if (window.performance.navigation.type === 0) {
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname === '/' && !location.hash) {
      const isFreshLoad = window.performance.navigation.type === 0;
      
      if (isFreshLoad) {
        window.scrollTo(0, 0);
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      }
    } else if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <div id="hero">
              <Hero />
            </div>
            <div id="about">
              <AboutProgram />
            </div>
            <div id="stages">
              <HowItWorks />
            </div>
            <div id="success">
              <SuccessStories />
            </div>
            <div id="partners">
              <Partners />
            </div>
            <div id="faq">
              <FAQ />
            </div>
            <div id="news">
              <News />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <Footer />
          </>
        } />
        
        <Route path="/privacy" element={
          <>
            <Navbar />
            <PrivacyPolicy />
            <Footer />
          </>
        } />
        
        <Route path="/terms" element={
          <>
            <Navbar />
            <TermsOfService />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
