import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import ProcessCards from './components/ProcessCards';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import ProblemVault from './components/ProblemVault';
import Prizes from './components/Prizes';
import Rules from './components/Rules';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProblemsPage from './components/ProblemsPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/problems') {
        const targetDate = new Date('2026-08-22T10:00:00+05:30').getTime();
        const isUnlocked = new Date().getTime() >= targetDate;
        
        if (isUnlocked) {
          setCurrentRoute('problems');
        } else {
          // Vault is locked, redirect back to #vault
          window.location.hash = '#vault';
          setCurrentRoute('home');
        }
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f2] text-graphite font-sans selection:bg-lime selection:text-graphite">
      {currentRoute === 'problems' ? (
        <ProblemsPage onBack={() => { window.location.hash = '#vault'; }} />
      ) : (
        <main>
          <Navbar />
          <Hero />
          <Marquee />
          <About />
          <ProcessCards />
          <Tracks />
          <Timeline />
          <ProblemVault />
          <Prizes />
          <Rules />
          <FAQ />
          <Contact />
          <Footer />
        </main>
      )}
    </div>
  );
}
