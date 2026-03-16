import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import SelectedWorks from './components/SelectedWorks';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Expertise />
      <SelectedWorks />
      <Philosophy />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
