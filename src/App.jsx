import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import ServicesPage from './pages/ServicesPage';
import ClientsPage from './pages/ClientsPage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import Loader from './components/Loader';
import Scene from './components/ThreeScene';

// ScrollToTop component to ensure page starts at top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-primary min-h-screen text-slate-200 selection:bg-accent selection:text-white overflow-x-hidden font-sans flex flex-col relative">
          {/* Persistent 3D Background */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <Scene />
          </div>

          <Navbar />
          <main className="flex-grow z-10 relative">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/clients" element={<ClientsPage />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
