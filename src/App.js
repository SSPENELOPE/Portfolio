import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contactme' element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
