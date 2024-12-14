import './index.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Skills from './component/Skills';
import Testimonials from './component/Testimonials';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes> 
          <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
