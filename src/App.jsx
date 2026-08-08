import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f2] text-graphite font-sans selection:bg-lime selection:text-graphite">
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
    </div>
  );
}
