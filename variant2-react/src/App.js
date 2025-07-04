import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Contact />
      <Services />
      <Footer />
    </div>
  );
}

export default App;