import React from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { ElevenLabsWidget } from './components/ElevenLabsWidget';

export default function App() {
  return (
    <main className="relative min-h-screen">
      <BackgroundEffects />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <LogoMarquee />
        <Services />
        <CaseStudies />
        <Testimonials />
        <About />
      </div>

      <ElevenLabsWidget />
    </main>
  );
}
